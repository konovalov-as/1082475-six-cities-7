import React from 'react';
import {connect} from 'react-redux';

import Header from  '../header/header';
import Footer from '../footer/footer';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

import placeOffersProp from '../offer-list/offer-list.prop';

import {checkFavorites} from '../../utils/check-favorites';

function FavoritesPage(props) {
  const {placeOffers} = props;
  const isFavoriteEmpty = checkFavorites(placeOffers);

  return (
    <div className={`page ${isFavoriteEmpty && 'page--favorites-empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${isFavoriteEmpty && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {!isFavoriteEmpty ? <FavoritesEmpty /> : <FavoritesList />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  placeOffers: placeOffersProp,
};

const mapStateToProps = (state) => ({
  placeOffers: state.placeOffers,
});

export {FavoritesPage};
export default connect(mapStateToProps, null)(FavoritesPage);
