import React from 'react';

import OfferCard from '../offer-card/offer-card';

import placeOffersProp from './offer-list.prop';

function OfferList(props) {
  const {placeOffers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {placeOffers.map((placeOffer) => (
        <OfferCard key={placeOffer.id} placeOffer={placeOffer}/>
      ))}
    </div>
  );
}

OfferList.propTypes = {
  placeOffers: placeOffersProp,
};

export default OfferList;
