import { OfferPhotoCount } from '../const';

export function getPlaceOffer (offerId, placeOffers) {
  let placeOffer = {};
  for (const offer of placeOffers) {
    if (offer.id === offerId) {
      placeOffer = offer;
      break;
    }
  }
  return placeOffer;
}

export function getOfferPhotos (placeOffer) {
  return placeOffer.images.slice(OfferPhotoCount.start, OfferPhotoCount.end);
}
