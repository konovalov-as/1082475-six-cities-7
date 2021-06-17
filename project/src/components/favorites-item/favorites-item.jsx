import React from 'react';

import FavoritesCard from '../favorites-card/favorites-card';

import PropTypes from 'prop-types';
import placeOffersProp from '../offer-list/offer-list.prop';

function FavoritesItem(props) {
  const {uniquePlace, favoritesOffers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{uniquePlace}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffers.map((favoritesOffer) => (
          <FavoritesCard key={favoritesOffer.id} favoritesOffer={favoritesOffer}/>
        ))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoritesOffers: placeOffersProp,
  uniquePlace: PropTypes.string,
};

export default FavoritesItem;
