import React from 'react';

import OfferCard from '../offer-card/offer-card';

import placeOffersProp from './offer-list.prop';
import {classNameProp} from './offer-list.prop';

function OfferList(props) {
  const {placeOffers, className} = props;

  return (
    <div className={`${className.placesList} places__list ${className.tab}`}>
      {placeOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          className={className}
        />
      ))}
    </div>
  );
}

OfferList.propTypes = {
  placeOffers: placeOffersProp,
  className: classNameProp,
};

export default OfferList;
