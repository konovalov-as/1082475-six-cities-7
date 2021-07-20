import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import { adaptOfferToClient, adaptOfferCommentsToClient, adaptUserToClient } from '../utils/adapter';

import { toast } from '../utils/toast/toast';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptOfferToClient(offer)))))
    .catch(() => {})
);

export const fetchDetailOfferInfo = (offerId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
    .then(({data}) => (dispatch(ActionCreator.loadNearbyOffer(data.map((nearbyOffer) => adaptOfferToClient(nearbyOffer))))))
    .catch(() => {});
  api.get(`${APIRoute.COMMENTS}/${offerId}`)
    .then(({data}) => dispatch(ActionCreator.loadOfferComments(data.map((offerComments) => adaptOfferCommentsToClient(offerComments)))))
    .catch(() => {});
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      toast('Attention! You are not authorized');
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      const adaptedUserInfo = adaptUserToClient(data);
      localStorage.setItem('token', adaptedUserInfo.token);
      localStorage.setItem('email', adaptedUserInfo.email);
      dispatch(ActionCreator.setAuthInfo(adaptedUserInfo));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => {
      toast('Your email or password is incorrect. Please try again');
    })
);

export const setAuthInfo = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      const adaptedUserInfo = adaptUserToClient(data);
      dispatch(ActionCreator.setAuthInfo(adaptedUserInfo));
    })
    .catch(() => {});
};

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .then(() => dispatch(ActionCreator.logout()))
    .catch(() => {})
);
