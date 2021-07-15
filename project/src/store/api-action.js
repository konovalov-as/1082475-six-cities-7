import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../const';
import { adaptOfferToClient, adaptOfferCommentsToClient } from '../utils/adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptOfferToClient(offer)))))
);

export const fetchDetailOfferInfo = (offerId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
    .then(({data}) => (dispatch(ActionCreator.loadNearbyOffer(data.map((nearbyOffer) => adaptOfferToClient(nearbyOffer))))));
  api.get(`${APIRoute.COMMENTS}/${offerId}`)
    .then(({data}) => dispatch(ActionCreator.loadOfferComments(data.map((offerComments) => adaptOfferCommentsToClient(offerComments)))));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
