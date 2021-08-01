import React from 'react';
import {PropTypes} from 'prop-types';
import {useSelector} from 'react-redux';
import {Switch, Route, Router as BrowserRouter, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {isCheckedAuth} from '../../utils/authorization-status';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesPage from '../favorites-page/favorites-page';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';

import { getPlaceOffers, getLoadedDataStatus, getLoadedDetailOfferInfoStatus } from '../../store/selectors/offer-data';
import { getAuthorizationStatus } from '../../store/selectors/user';

function App({setDetailOfferInfo}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const isDetailOfferInfoLoaded = useSelector(getLoadedDetailOfferInfoStatus);
  const placeOffers = useSelector(getPlaceOffers);

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
          render={() =>  <FavoritesPage/> }
        >
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.SIGNIN}
          render={
            () => (authorizationStatus === AuthorizationStatus.NO_AUTH)
              ? <SignIn />
              : <Redirect to={AppRoute.MAIN} />
          }
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  setDetailOfferInfo: PropTypes.func.isRequired,
};

export {App};
export default App;
