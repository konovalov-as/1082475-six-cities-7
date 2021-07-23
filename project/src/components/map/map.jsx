import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {useSelector} from 'react-redux';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';

import { getCity, getPlaceOffers } from '../../store/selectors/offer-data';

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

function Map({selectedOffer}) {
  const city = useSelector(getCity);
  const placeOffers = useSelector(getPlaceOffers);

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
  selectedOffer: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export {Map};
export default Map;
