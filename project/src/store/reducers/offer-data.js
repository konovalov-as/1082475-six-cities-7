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
  listCities,
  isDataLoaded: false,
  isDetailOfferInfoLoaded: false,
  favoritesList: [],
  isFavoritesLoaded: false,
};

function fillListOffers(state, action) {
  const filteredOffers = [];
  const activeCity = action.payload;

  for (const originOffer of state.originOffers) {
    if (originOffer.city.name === activeCity) {
      filteredOffers.push(originOffer);
      city.name = originOffer.city.name;
      city.location.latitude = originOffer.city.location.latitude;
      city.location.longitude = originOffer.city.location.longitude;
    }
  }

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
      for (const originOffer of state.originOffers) {
        if (originOffer.city.name === state.city.name) {
          sortingOffer.push(originOffer);
        }
      }
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

const replaceOffer = (previousOffers, newOffer) => previousOffers.map((previousOffer) => previousOffer.id === newOffer.id ? newOffer : previousOffer);

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return fillListOffers(state, action);
    case ActionType.FILL_LIST_OFFERS:
      return fillListOffers(state, action);
    case ActionType.SORT_OFFERS:
      return sortOffers(state, action);
    case ActionType.LOAD_OFFERS:
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
    case ActionType.LOAD_FAVORITES_LIST:
      return {
        ...state,
        favoritesList: action.payload,
        isFavoritesLoaded: true,
      };
    case ActionType.TOGGLE_FAVORITE:
      return {
        ...state,
        placeOffers: replaceOffer(state.placeOffers, action.payload),
        detailOfferInfo: {
          ...state.detailOfferInfo,
          nearbyOffers: replaceOffer(state.detailOfferInfo.nearbyOffers, action.payload),
        },
        favoritesList: replaceOffer(state.favoritesList, action.payload),
        originOffers: replaceOffer(state.originOffers, action.payload),
      };
    default:
      return state;
  }
};

export {offerData};
