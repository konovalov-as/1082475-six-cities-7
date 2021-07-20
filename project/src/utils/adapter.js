export const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    host: {
      ...offer.host,
      isPro: offer.host.is_pro,
      avatarUrl: offer.host.avatar_url,
    },
  };

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

export const adaptOfferCommentsToClient = (offerComment) => {
  const adaptedOfferComment = {
    ...offerComment,
    user: {
      ...offerComment.user,
      avatarUrl: offerComment.user.avatar_url,
      isPro: offerComment.user.is_pro,
    },
  };

  delete adaptedOfferComment.user.avatar_url;
  delete adaptedOfferComment.user.is_pro;
  return adaptedOfferComment;
};

export const adaptUserToClient = (userInfo) => {
  const adaptedUserInfo = {
    ...userInfo,
    avatarUrl: userInfo.avatar_url,
    isPro: userInfo.is_pro,
  };

  delete adaptedUserInfo.avatar_url;
  delete adaptedUserInfo.is_pro;

  return adaptedUserInfo;
};
