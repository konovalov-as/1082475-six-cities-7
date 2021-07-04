import React from 'react';
import {connect} from 'react-redux';

import OfferList from '../offer-list/offer-list';
import Map from '../map/map';

import {defaultCityProp} from '../../mocks/place-offers.prop';
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
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
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
