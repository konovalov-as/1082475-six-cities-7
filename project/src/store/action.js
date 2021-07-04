export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_LIST_OFFERS: 'offer/fillListOffers',
  SET_CURRENT_OFFER: 'offer/setCurrentOffer',
  RESET_OFFER: 'offer/reset',
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
  resetOffer: () => ({
    type: ActionType.RESET_OFFER,
  }),
};
