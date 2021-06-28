import {ActionType} from './action';

import placeOffers, {defaultCity} from '../mocks/place-offers';
import {comments} from '../mocks/comments';
import {nearPlaceOffers} from '../mocks/place-offers-near';
import {uniquePlaces} from '../mocks/place-offers';
import {listCities} from '../mocks/list-cities';

const initialState = {
  defaultCity,
  placeOffers,
  comments,
  nearPlaceOffers,
  uniquePlaces,
  listCities,
};

function fillListOffers(state, action) {
  const filteredOffers = [];
  const activeCity = action.payload;
  const currentCity = {
    ...defaultCity,
  };

  initialState.placeOffers.slice().map((placeOffer) => {
    if (placeOffer.city.name === activeCity) {
      filteredOffers.push(placeOffer);
      currentCity.name = placeOffer.city.name;
      currentCity.location.latitude = placeOffer.city.location.latitude;
      currentCity.location.longitude = placeOffer.city.location.longitude;
    }
  });

  return {
    ...state,
    defaultCity: currentCity,
    placeOffers: filteredOffers,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return fillListOffers(state, action);
    case ActionType.FILL_LIST_OFFERS:
      return fillListOffers(state, action);
    case ActionType.RESET_OFFER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export {reducer};
