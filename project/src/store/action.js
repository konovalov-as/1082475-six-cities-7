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

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillListOffers: (city) =>({
    type: ActionType.FILL_LIST_OFFERS,
    payload: city,
  }),
  setCurrentOffer: (cardId) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: cardId,
  }),
  removeCurrentOffer: (cardId) => ({
    type: ActionType.REMOVE_CURRENT_OFFER,
    payload: cardId,
  }),
  sortOffers: (payload) => ({
    type: ActionType.SORT_OFFERS,
    payload: payload,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadNearbyOffer: (nearbyOffer) => ({
    type: ActionType.LOAD_NEARBY_OFFER,
    payload: nearbyOffer,
  }),
  loadOfferComments: (offerComments) => ({
    type: ActionType.LOAD_OFFER_COMMENTS,
    payload: offerComments,
  }),
  postOfferComment: (comment) => ({
    type: ActionType.POST_OFFER_COMMENT,
    payload: comment,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setAuthInfo: (authInfo) => ({
    type: ActionType.SET_AUTH_INFO,
    payload: authInfo,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
