import {
  loadOffers,
  loadNearbyOffer,
  loadOfferComments,
  requireAuthorization,
  setAuthInfo,
  redirectToRoute,
  logout as closeSession,
  postOfferComment,
  loadFavoritesList,
  postFavorite
} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import { adaptOfferToClient, adaptOfferCommentsToClient, adaptUserToClient } from '../utils/adapter';
import { NameSpace } from './reducers/root-reducer';

import { toast } from '../utils/toast/toast';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((offer) => adaptOfferToClient(offer)))))
    .catch(() => {'No access to the server';})
);

export const fetchDetailOfferInfo = (offerId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
    .then(({data}) => (dispatch(loadNearbyOffer(data.map((nearbyOffer) => adaptOfferToClient(nearbyOffer))))))
    .catch(() => {});
  api.get(`${APIRoute.COMMENTS}/${offerId}`)
    .then(({data}) => dispatch(loadOfferComments(data.map((offerComments) => adaptOfferCommentsToClient(offerComments)))))
    .catch(() => {'No access to the server';});
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
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
      dispatch(setAuthInfo(adaptedUserInfo));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {
      toast('Your email or password is incorrect. Please try again');
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .then(() => dispatch(closeSession()))
    .catch(() => {})
);

export const postComment = ({comment, rating}, offerId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${offerId}`, {comment, rating})
    .then(({data}) => {
      dispatch(postOfferComment(data.map((offerComments) => adaptOfferCommentsToClient(offerComments))));
    })
    .catch(() => {
      toast('You are not authorized');
    })
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavoritesList(data.map((favoriteItem) => adaptOfferToClient(favoriteItem))));
    })
    .catch((error) => {
      toast(error);
    });
};

export const toggleFavorite = ({offerId, favoriteStatus}) => (dispatch, getState, api) => {
  const authStatus = getState()[NameSpace.USER].authorizationStatus;

  if (authStatus !== AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.SIGNIN));
  } else {
    api.post(`${APIRoute.FAVORITE}/${offerId}/${favoriteStatus}`)
      .then(({data}) => {
        dispatch(postFavorite(adaptOfferToClient(data)));
      })
      .catch((error) => {
        toast(error);
      });
  }
};
