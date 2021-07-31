
import {NameSpace} from '../reducers/root-reducer';

export const getPlaceOffers = (state) => state[NameSpace.DATA].placeOffers;
export const getDetailOfferInfo = (state) => state[NameSpace.DATA].detailOfferInfo;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getLoadedDetailOfferInfoStatus = (state) => state[NameSpace.DATA].isDetailOfferInfoLoaded;
export const getCity = (state) => state[NameSpace.DATA].city;
export const getListCities = (state) => state[NameSpace.DATA].listCities;
export const getUniquePlaces = (state) => state[NameSpace.DATA].uniquePlaces;
export const getSelectedOffer = (state) => state[NameSpace.DATA].selectedOffer;
export const getFavoritesList = (state) => state[NameSpace.DATA].favoritesList;
export const getLoadedFavoritesStatus = (state) => state[NameSpace.DATA].isFavoritesLoaded;
