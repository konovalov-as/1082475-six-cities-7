export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_LIST_OFFERS: 'offer/fillListOffers',
  SET_CURRENT_OFFER: 'offer/setCurrentOffer',
  REMOVE_CURRENT_OFFER: 'offer/removeCurrentOffer',
  SORT_OFFERS: 'offer/sortOffers',
  LOAD_OFFERS: 'data/offers',
  LOAD_NEARBY_OFFER: 'data/nearbyOffer',
  LOAD_OFFER_COMMENTS: 'data/loadOfferComments',
  POST_OFFER_COMMENT: 'data/postOfferComment',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  SET_AUTH_INFO: 'user/setAuthInfo',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const fillListOffers = (city) =>({
  type: ActionType.FILL_LIST_OFFERS,
  payload: city,
});

export const setCurrentOffer = (cardId) => ({
  type: ActionType.SET_CURRENT_OFFER,
  payload: cardId,
});

export const removeCurrentOffer = (cardId) => ({
  type: ActionType.REMOVE_CURRENT_OFFER,
  payload: cardId,
});

export const sortOffers = (payload) => ({
  type: ActionType.SORT_OFFERS,
  payload: payload,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadNearbyOffer = (nearbyOffer) => ({
  type: ActionType.LOAD_NEARBY_OFFER,
  payload: nearbyOffer,
});

export const loadOfferComments = (offerComments) => ({
  type: ActionType.LOAD_OFFER_COMMENTS,
  payload: offerComments,
});

export const postOfferComment = (comment) => ({
  type: ActionType.POST_OFFER_COMMENT,
  payload: comment,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setAuthInfo = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
