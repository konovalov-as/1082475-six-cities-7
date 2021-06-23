import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import placeOffersProp from '../offer-list/offer-list.prop';
import nearPlaceOffersProp from '../../mocks/place-offers-near.prop';
import uniquePlaceProp, {firstOfferProp} from '../../mocks/place-offers.prop';
import commentsProp from '../../mocks/comments.prop';

function App({placeOffers, uniquePlaces, firstOffer, comments, nearPlaceOffers}) {
  const isFavorite = placeOffers.some((placeOffer) => (placeOffer.isFavorite === true));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            placeOffers = {placeOffers}
            firstOffer = {firstOffer}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room
            comments = {comments}
            firstOffer = {firstOffer}
            placeOffers = {placeOffers}
            nearPlaceOffers = {nearPlaceOffers}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          {(!isFavorite) ?
            <FavoritesEmpty /> :
            <FavoritesList
              placeOffers = {placeOffers}
              uniquePlaces = {uniquePlaces}
            />}
        </Route>
        <Route exact path={AppRoute.SIGNIN}>
          <SignIn />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placeOffers: placeOffersProp,
  uniquePlaces: uniquePlaceProp,
  firstOffer: firstOfferProp,
  comments: commentsProp,
  nearPlaceOffers: nearPlaceOffersProp,
};

export default App;
