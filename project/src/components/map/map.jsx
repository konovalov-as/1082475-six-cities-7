import React, {useRef, useEffect} from 'react';

import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';

import placeOffersProp from '../offer-list/offer-list.prop';
import {firstOfferProp} from '../../mocks/place-offers.prop';

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
  const {firstOffer, placeOffers, selectedOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, firstOffer);

  useEffect(() => {
    if (map) {
      placeOffers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          },
          {
            icon: (offer.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, placeOffers, selectedOffer]);

  return (
    <section id="map" ref={mapRef} style={{height: '100%'}} className="cities__map map"></section>
  );
}

Map.propTypes = {
  firstOffer: firstOfferProp,
  placeOffers: placeOffersProp,
  selectedOffer: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Map;