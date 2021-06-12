import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesList from '../favorites-list/favorites-list';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import placeOffersProp from '../offer-list/offer-list.prop';

function App({placeOffers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            placeOffers = {placeOffers}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesList
            placeOffers = {placeOffers}
          />
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
};

export default App;
