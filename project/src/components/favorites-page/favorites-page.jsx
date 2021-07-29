import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from  '../header/header';
import Footer from '../footer/footer';
import FavoriteSection from '../favorite-section/favorite-section';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

import { fetchFavoritesList } from '../../store/api-action';
import { getFavoritesList } from '../../store/selectors/offer-data';

function FavoritesPage() {
  const favoritesList = useSelector(getFavoritesList);
  const isLoadedFavorites = favoritesList.length;

  const dispatch = useDispatch();

  const loadFavoritesList = useCallback(
    () => dispatch(fetchFavoritesList()),
    [dispatch],
  );

  useEffect(() => {
    loadFavoritesList();
  }, [loadFavoritesList]);

  return (
    <div className={`page ${isLoadedFavorites ? '' : 'page--favorites-empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${isLoadedFavorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {isLoadedFavorites ? <FavoriteSection favoritesList={favoritesList} /> : <FavoritesEmpty /> }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export {FavoritesPage};
export default FavoritesPage;
