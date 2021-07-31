import React from 'react';

import FavoritesItem from '../favorites-item/favorites-item';

import placeOffersProp from '../offer-list/offer-list.prop';

function FavoriteSection({favoritesList}) {
  const cities = [...new Set(favoritesList.map((favoriteOffer) => favoriteOffer.city.name))];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => <FavoritesItem favoriteCity={city} key={city} favoritesList={favoritesList} /> )}
      </ul>
    </section>
  );
}

FavoriteSection.propTypes = {
  favoritesList: placeOffersProp,
};

export {FavoriteSection};
export default FavoriteSection;
