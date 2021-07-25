import React from 'react';
import {useSelector} from 'react-redux';

import FavoritesItem from '../favorites-item/favorites-item';

import { getPlaceOffers, getUniquePlaces } from '../../store/selectors/offer-data';

function FavoriteSection() {
  const placeOffers = useSelector(getPlaceOffers);
  const uniquePlaces = useSelector(getUniquePlaces);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {uniquePlaces.map((uniquePlace) => {
          const favoritesOffers = placeOffers.filter((placeOffer) => (placeOffer.city.name === uniquePlace && placeOffer.isFavorite));
          return favoritesOffers.length ? <FavoritesItem key={uniquePlace} uniquePlace={uniquePlace} favoritesOffers={favoritesOffers}/> : null;
        })}
      </ul>
    </section>
  );
}

export {FavoriteSection};
export default FavoriteSection;
