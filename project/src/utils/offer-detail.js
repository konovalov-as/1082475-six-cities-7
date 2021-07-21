import { OfferPhotoCount } from '../const';

export function getPlaceOffer (offerId, placeOffers) {
  function getOffer(offer) {
    return offer.id = offerId;
  }

  const placeOffer = placeOffers.find(getOffer);

  return placeOffer;
}

export function getOfferPhotos (placeOffer) {
  return placeOffer.images.slice(OfferPhotoCount.start, OfferPhotoCount.end);
}
