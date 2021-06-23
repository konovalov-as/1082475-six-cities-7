import React from 'react';

import NearOfferCard from '../offer-card-near/offer-card-near';

import placeOffersProp from './offer-list.prop';

function NearOfferList(props) {
  const {nearOffers} = props;

  return (
    <div className="near-places__list places__list">
      {nearOffers.map((offer) => (
        <NearOfferCard
          key={offer.id}
          nearOffer={offer}
        />
      ))}
    </div>
  );
}

NearOfferList.propTypes = {
  nearOffers: placeOffersProp,
};

export default NearOfferList;
