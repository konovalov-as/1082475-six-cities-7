import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App({offersPlace}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            offersPlace = {offersPlace}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
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
  offersPlace: PropTypes.array.isRequired,
};

export default App;
