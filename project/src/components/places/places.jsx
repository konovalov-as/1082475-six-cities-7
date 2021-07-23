import React from 'react';
import {useSelector} from 'react-redux';

import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import SortingOptions from '../sorting-options/sorting-options';

import { getCity, getPlaceOffers, getSelectedOffer } from '../../store/selectors/offer-data';

function Places() {
  const city = useSelector(getCity);
  const placeOffers = useSelector(getPlaceOffers);
  const selectedOffer = useSelector(getSelectedOffer);

  const className = {
    placesList: 'cities__places-list',
    tab: 'tabs__content',
    card: 'cities__place-card',
    imageWrap: 'cities__image-wrapper',
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placeOffers.length} places to stay in {city.name}</b>
        <SortingOptions />
        {<OfferList placeOffers={placeOffers} className={className}/>}
      </section>
      <div className="cities__right-section">
        <Map selectedOffer={selectedOffer} />
      </div>
    </div>
  );
}

export {Places};
export default Places;
