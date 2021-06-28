export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_LIST_OFFERS: 'offer/fillListOffers',
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
  resetOffer: () => ({
    type: ActionType.RESET_OFFER,
  }),
};
