import React from 'react';
import {connect} from 'react-redux';

import FavoritesItem from '../favorites-item/favorites-item';

import placeOffersProp from '../offer-list/offer-list.prop';

function FavoriteSection(props) {
  const {placeOffers, uniquePlaces} = props;

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

FavoriteSection.propTypes = {
  placeOffers: placeOffersProp,
  uniquePlaces: placeOffersProp,
};

const mapStateToProps = (state) => ({
  placeOffers: state.placeOffers,
  uniquePlaces: state.uniquePlaces,
});

export {FavoriteSection};
export default connect(mapStateToProps, null)(FavoriteSection);
