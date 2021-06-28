import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import placeOffersProp from '../offer-list/offer-list.prop';

function App(props) {
  const {placeOffers} = props;
  const isFavorite = placeOffers.some((placeOffer) => (placeOffer.isFavorite === true));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          {(!isFavorite) ?
            <FavoritesEmpty /> :
            <FavoritesList />}
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

const mapStateToProps = (state) => ({
  placeOffers: state.placeOffers,
});

export {App};
export default connect(mapStateToProps, null)(App);
