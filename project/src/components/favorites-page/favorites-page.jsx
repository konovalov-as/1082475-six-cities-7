import React from 'react';
import {useSelector} from 'react-redux';

import Header from  '../header/header';
import Footer from '../footer/footer';
import FavoriteSection from '../favorite-section/favorite-section';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

import {checkFavorites} from '../../utils/check-favorites';

import { getPlaceOffers } from '../../store/selectors/offer-data';

function FavoritesPage() {
  const placeOffers = useSelector(getPlaceOffers);
  const isFavoriteEmpty = checkFavorites(placeOffers);

  return (
    <div className={`page ${isFavoriteEmpty && 'page--favorites-empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${isFavoriteEmpty && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {!isFavoriteEmpty ? <FavoritesEmpty /> : <FavoriteSection />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export {FavoritesPage};
export default FavoritesPage;
