import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';

import placeOffersProp from './offer-list.prop';
import {classNameProp} from './offer-list.prop';

function OfferList(props) {
  const {placeOffers, className, handleMouseEnter = () => {}, handleMouseLeave = () => {}} = props;

  return (
    <div className={`${className.placesList} places__list ${className.tab}`}>
      {placeOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          className={className}
          handleMouseEnter={() => handleMouseEnter(offer.id)}
          handleMouseLeave={() => handleMouseLeave(null)}
        />
      ))}
    </div>
  );
}

OfferList.propTypes = {
  placeOffers: placeOffersProp,
  className: classNameProp,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
};

export default OfferList;
