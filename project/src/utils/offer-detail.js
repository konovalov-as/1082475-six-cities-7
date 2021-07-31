import { OfferPhotoCount } from '../const';

export function getPlaceOffer (offerId, placeOffers) {
  let placeOffer = {};
  placeOffers.map((offer) => {
    if (offer.id === offerId) {
      placeOffer = offer;
    }
  });
  return placeOffer;
}

export function getOfferPhotos (placeOffer) {
  return placeOffer.images.slice(OfferPhotoCount.start, OfferPhotoCount.end);
}
