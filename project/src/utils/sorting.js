import {ReviewCount} from '../const';

function sortCommentsByDate (commentA, commentB) {
  if (commentA.date > commentB.date) {
    return -1;
  }
  if (commentA.date < commentB.date) {
    return 1;
  }
  return 0;
}

export function sortComments(comments) {
  return comments.slice().sort(sortCommentsByDate).slice(ReviewCount.start, ReviewCount.end);
}

function sortByPriceToHigh (offerA, offerB) {
  if (offerA.price > offerB.price) {
    return 1;
  }
  if (offerA.price < offerB.price) {
    return -1;
  }
  return 0;
}

export function sortOffersByPriceToHigh(offers) {
  return offers.slice().sort(sortByPriceToHigh);
}

function sortByPriceToLow (offerA, offerB) {
  if (offerA.price > offerB.price) {
    return -1;
  }
  if (offerA.price < offerB.price) {
    return 1;
  }
  return 0;
}

export function sortOffersByPriceToLow(offers) {
  return offers.slice().sort(sortByPriceToLow);
}

function sortByRatedToFirst (offerA, offerB) {
  if (offerA.rating > offerB.rating) {
    return -1;
  }
  if (offerA.rating < offerB.rating) {
    return 1;
  }
  return 0;
}

export function sortOffersByRatedToFirst(offers) {
  return offers.slice().sort(sortByRatedToFirst);
}
