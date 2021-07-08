import {ActionType} from './action';

import {sortOffersByPriceToHigh, sortOffersByPriceToLow, sortOffersByRatedToFirst} from '../utils/sorting';

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
  selectedOffer: null,
};

function fillListOffers(state, action) {
  const filteredOffers = [];
  const activeCity = action.payload;
  defaultCity.name = action.payload;
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

function setCurrentOffer(state, action) {
  const currentCardId = action.payload;
  const currentOffer = placeOffers.find((placeOffer) => placeOffer.id === currentCardId);

  return {
    ...state,
    selectedOffer: currentOffer,
  };
}

function sortOffers(state, action) {
  let sortingOffer = [];

  switch (action.payload.sortingKind) {
    case 0:
      initialState.placeOffers.map((placeOffer) => {
        if (placeOffer.city.name === state.defaultCity.name) {
          sortingOffer.push(placeOffer);
        }
      });
      break;
    case 1:
      sortingOffer = sortOffersByPriceToHigh(action.payload.offers);
      break;
    case 2:
      sortingOffer = sortOffersByPriceToLow(action.payload.offers);
      break;
    case 3:
      sortingOffer = sortOffersByRatedToFirst(action.payload.offers);
      break;
    default:
      return sortingOffer;
  }

  return {
    ...state,
    placeOffers: sortingOffer,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return fillListOffers(state, action);
    case ActionType.FILL_LIST_OFFERS:
      return fillListOffers(state, action);
    case ActionType.SET_CURRENT_OFFER:
      return setCurrentOffer(state, action);
    case ActionType.SORT_OFFERS:
      return sortOffers(state, action);
    case ActionType.RESET_OFFER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export {reducer};
