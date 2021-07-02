import React from 'react';

import OfferCard from '../offer-card/offer-card';

import placeOffersProp from './offer-list.prop';
import {ClassNameProp} from './offer-list.prop';

function OfferList(props) {
  const {placeOffers, ClassName} = props;

  return (
    <div className={`${ClassName.placesList} places__list ${ClassName.tab}`}>
      {placeOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          ClassName={ClassName}
        />
      ))}
    </div>
  );
}

OfferList.propTypes = {
  placeOffers: placeOffersProp,
  ClassName: ClassNameProp,
};

export default OfferList;
