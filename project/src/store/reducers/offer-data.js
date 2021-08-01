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

function toggleFavorite(state, action) {
  const updatedFavorite = action.payload;
  const indexFavoriteOffer = state.favoritesList.findIndex((favoriteItem) => favoriteItem.id === updatedFavorite.id);
  const indexOffer = state.placeOffers.findIndex((offer) => offer.id === updatedFavorite.id);
  const indexNearbyOffer = state.detailOfferInfo.nearbyOffers.findIndex((nearbyOffer) => nearbyOffer.id === updatedFavorite.id);

  return {
    ...state,
    placeOffers: [
      ...state.placeOffers.slice(0, indexOffer),
      updatedFavorite,
      ...state.placeOffers.slice(indexOffer + 1),
    ],
    originOffers: [
      ...state.originOffers.slice(0, indexOffer),
      updatedFavorite,
      ...state.originOffers.slice(indexOffer + 1),
    ],
    favoritesList: [
      ...state.favoritesList.slice(0, indexFavoriteOffer),
      updatedFavorite,
      ...state.favoritesList.slice(indexFavoriteOffer + 1),
    ],
    detailOfferInfo: {
      ...state.detailOfferInfo,
      nearbyOffers: [
        ...state.detailOfferInfo.nearbyOffers.slice(0, indexNearbyOffer),
        updatedFavorite,
        ...state.detailOfferInfo.nearbyOffers.slice(indexNearbyOffer + 1),
      ],
    },
  };
}

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
      return toggleFavorite(state, action);
    default:
      return state;
  }
};

export {offerData};
