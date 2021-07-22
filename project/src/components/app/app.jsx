import React from 'react';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isCheckedAuth} from '../../utils/authorization-status';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesPage from '../favorites-page/favorites-page';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';

import placeOffersProp from '../offer-list/offer-list.prop';

function App(props) {
  const {authorizationStatus, isDataLoaded, isDetailOfferInfoLoaded, setDetailOfferInfo, placeOffers} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.ROOM} render={(routeProps) => {
          const offerId = Number(routeProps.match.params.id);
          if (placeOffers.some((placeOffer) => placeOffer.id === offerId)) {
            setDetailOfferInfo(offerId);
            return isDetailOfferInfoLoaded ? <Room offerId={offerId} /> : <LoadingScreen />;
          } else {
            return <NotFoundScreen />;
          }
        }}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        >
        </PrivateRoute>
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
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isDetailOfferInfoLoaded: PropTypes.bool.isRequired,
  setDetailOfferInfo: PropTypes.func.isRequired,
  placeOffers: placeOffersProp,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  isDetailOfferInfoLoaded: state.isDetailOfferInfoLoaded,
  placeOffers: state.placeOffers,
});

export {App};
export default connect(mapStateToProps, null)(App);
