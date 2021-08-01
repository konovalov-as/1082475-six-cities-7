import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import SortingOptions from '../sorting-options/sorting-options';

import { getCity, getPlaceOffers } from '../../store/selectors/offer-data';

function Places() {
  const city = useSelector(getCity);
  const placeOffers = useSelector(getPlaceOffers);

  const className = {
    placesList: 'cities__places-list',
    tab: 'tabs__content',
    card: 'cities__place-card',
    imageWrap: 'cities__image-wrapper',
  };

  const [activeOffer, setActiveOffer] = useState({});

  const handleCardHover = (id) => {
    const currentOffer = placeOffers.find((placeOffer) => placeOffer.id === Number(id));
    setActiveOffer(currentOffer);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placeOffers.length} places to stay in {city.name}</b>
        <SortingOptions />
        <OfferList
          placeOffers={placeOffers}
          className={className}
          handleMouseEnter={handleCardHover}
          handleMouseLeave={() => setActiveOffer({})}
        />

      </section>
      <div className="cities__right-section">
        <Map city={city} activeOffer={activeOffer} offers={placeOffers} />
      </div>
    </div>
  );
}

export {Places};
export default Places;
