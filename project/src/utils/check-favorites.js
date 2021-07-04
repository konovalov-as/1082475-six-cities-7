export function checkFavorites(placeOffers) {
  return placeOffers.some((placeOffer) => (placeOffer.isFavorite === true));
}
