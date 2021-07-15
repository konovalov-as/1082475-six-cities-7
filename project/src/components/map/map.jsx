import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';

import placeOffersProp from '../offer-list/offer-list.prop';
import { cityProp } from '../../const.prop';

const Marker = {
  DEFAULT: 'img/pin.svg',
  ACTIVE: 'img/pin-active.svg',
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: Marker.DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: Marker.ACTIVE,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map(props) {
  const {city, placeOffers, selectedOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const prevActiveOffer = useRef();

  useEffect(() => {
    if (map) {
      prevActiveOffer.current = selectedOffer;

      if (prevActiveOffer !== selectedOffer) {
        [...map.getPane('markerPane').children]
          .forEach((marker) => marker.remove());
      }

      map.flyTo([city.location.latitude, city.location.longitude]);

      const latLngs =[];

      placeOffers.forEach((offer) => {
        const { latitude, longitude } = offer.location;

        const marker = leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          },
          {
            icon: (selectedOffer !== null && selectedOffer !== undefined && offer.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);

        latLngs.push(marker.getLatLng());
      });

      const bounds = leaflet.latLngBounds(latLngs);
      map.fitBounds(bounds);
    }
  }, [map, placeOffers, selectedOffer]);

  return (
    <section id="map" ref={mapRef} style={{height: '100%'}} className="cities__map map" />
  );
}

Map.propTypes = {
  city: cityProp,
  placeOffers: placeOffersProp,
  selectedOffer: PropTypes.shape({
    id: PropTypes.number,
  }),
};

const mapStateToProps = (state) => ({
  city: state.city,
  placeOffers: state.placeOffers,
});

export {Map};
export default connect(mapStateToProps, null)(Map);
