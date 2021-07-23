import { ActionType } from '../action';
import {sortOffersByPriceToHigh, sortOffersByPriceToLow, sortOffersByRatedToFirst} from '../../utils/sorting';
import { city, listCities } from '../../const';

const initialState = {
  originOffers: [],
  placeOffers: [],
  detailOfferInfo: {
    nearbyOffers: [],
    comments: [],
  },
  city,
  uniquePlaces: [],
  listCities,
  selectedOffer: null,
  isDataLoaded: false,
  isDetailOfferInfoLoaded: false,
};

function fillListOffers(state, action) {
  const filteredOffers = [];
  const activeCity = action.payload;

  state.originOffers.map((originOffer) => {
    if (originOffer.city.name === activeCity) {
      filteredOffers.push(originOffer);
      city.name = originOffer.city.name;
      city.location.latitude = originOffer.city.location.latitude;
      city.location.longitude = originOffer.city.location.longitude;
    }
  });

  return {
    ...state,
    city,
    placeOffers: filteredOffers,
  };
}

function sortOffers(state, action) {
  let sortingOffer = [];

  switch (action.payload.sortingKind) {
    case 0:
      state.originOffers.map((originOffer) => {
        if (originOffer.city.name === state.city.name) {
          sortingOffer.push(originOffer);
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

function setCurrentOffer(state, action) {
  const currentCardId = action.payload;

  const currentOffer = state.placeOffers.find((placeOffer) => placeOffer.id === currentCardId);

  return {
    ...state,
    selectedOffer: currentOffer,
  };
}

function setUniquePlaces (placeOffers) {
  function mapPlace(placeOffer) {
    return placeOffer.city.name;
  }

  const mapPlaces = placeOffers.map(mapPlace);

  function filterPlaces(place, index) {
    return mapPlaces.indexOf(place) === index;
  }

  return mapPlaces.filter(filterPlaces);
}

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return fillListOffers(state, action);
    case ActionType.FILL_LIST_OFFERS:
      return fillListOffers(state, action);
    case ActionType.SORT_OFFERS:
      return sortOffers(state, action);
    case ActionType.SET_CURRENT_OFFER:
      return setCurrentOffer(state, action);
    case ActionType.REMOVE_CURRENT_OFFER:
      return {
        ...state,
        selectedOffer: null,
      };
    case ActionType.LOAD_OFFERS:
      setUniquePlaces(action.payload);
      return {
        ...state,
        originOffers: action.payload,
        placeOffers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY_OFFER:
      return {
        ...state,
        detailOfferInfo: {
          ...state.detailOfferInfo,
          nearbyOffers: action.payload,
        },
      };
    case ActionType.LOAD_OFFER_COMMENTS:
      return {
        ...state,
        detailOfferInfo: {
          ...state.detailOfferInfo,
          comments: action.payload,
        },
        isDetailOfferInfoLoaded: true,
      };
    case ActionType.POST_OFFER_COMMENT:
      return {
        ...state,
        detailOfferInfo: {
          ...state.detailOfferInfo,
          comments: action.payload,
        },
      };
    default:
      return state;
  }
};

export {offerData};