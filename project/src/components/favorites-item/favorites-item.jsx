import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FavoritesCard from '../favorites-card/favorites-card';

import placeOffersProp from '../offer-list/offer-list.prop';

function FavoritesItem({favoritesList, favoriteCity}) {
  const favoritesHotels = favoritesList.filter(
    (favoritesHotel) => favoritesHotel.city.name === favoriteCity,
  );

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to="/" className="locations__item-link">
            <span>{favoriteCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesHotels.map((favoritesOffer) => (
          <FavoritesCard key={favoritesOffer.id} favoritesOffer={favoritesOffer}/>
        ))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoriteCity: PropTypes.string.isRequired,
  favoritesList: placeOffersProp,
};

export default FavoritesItem;
