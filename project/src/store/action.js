export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_LIST_OFFERS: 'offer/fillListOffers',
  SET_CURRENT_OFFER: 'offer/setCurrentOffer',
  REMOVE_CURRENT_OFFER: 'offer/removeCurrentOffer',
  SORT_OFFERS: 'offer/sortOffers',
  RESET_OFFER: 'offer/reset',
  LOAD_OFFERS: 'data/offers',
  LOAD_NEARBY_OFFER: 'data/nearbyOffer',
  LOAD_OFFER_COMMENTS: 'data/offerComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (defaultCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: defaultCity,
  }),
  fillListOffers: (defaultCity) =>({
    type: ActionType.FILL_LIST_OFFERS,
    payload: defaultCity,
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
  resetOffer: () => ({
    type: ActionType.RESET_OFFER,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
