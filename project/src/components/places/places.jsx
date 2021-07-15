import React from 'react';
import {connect} from 'react-redux';

import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import SortingOptions from '../sorting-options/sorting-options';

import {defaultCityProp} from '../../const.prop';
import placeOffersProp from '../offer-list/offer-list.prop';
import placeOfferProp from '../offer-card/offer-card.prop';

function Places(props) {
  const {defaultCity, placeOffers, selectedOffer} = props;

  const ClassName = {
    placesList: 'cities__places-list',
    tab: 'tabs__content',
    card: 'cities__place-card',
    imageWrap: 'cities__image-wrapper',
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placeOffers.length} places to stay in {defaultCity.name}</b>
        <SortingOptions />
        {<OfferList placeOffers={placeOffers} ClassName={ClassName}/>}
      </section>
      <div className="cities__right-section">
        <Map selectedOffer={selectedOffer} />
      </div>
    </div>
  );
}

Places.propTypes = {
  defaultCity: defaultCityProp,
  placeOffers: placeOffersProp,
  selectedOffer: placeOfferProp,
};

const mapStateToProps = (state) => ({
  defaultCity: state.defaultCity,
  placeOffers: state.placeOffers,
  selectedOffer: state.selectedOffer,
});

export {Places};
export default connect(mapStateToProps, null)(Places);
