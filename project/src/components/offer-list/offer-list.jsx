import React from 'react';

import OfferCard from '../offer-card/offer-card';

import placeOffersProp from './offer-list.prop';
import {handleCardHoverProp} from '../offer-card/offer-card.prop';

function OfferList(props) {
  const {placeOffers, handleCardHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {placeOffers.map((placeOffer) => (
        <OfferCard key={placeOffer.id} placeOffer={placeOffer} handleCardHover={handleCardHover} />
      ))}
    </div>
  );
}

OfferList.propTypes = {
  placeOffers: placeOffersProp,
  handleCardHover: handleCardHoverProp,
};

export default OfferList;
