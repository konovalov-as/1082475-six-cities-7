import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import Header from '../header/header';
import ItemCity from '../item-city/item-city';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';

import placeOffersProp from '../offer-list/offer-list.prop';
import {defaultCityProp} from '../../mocks/place-offers.prop';
import listCitiesProp from '../../mocks/list-cities.prop';

function Main(props) {
  const {defaultCity, placeOffers, listCities, fillListOffers, changeCity} = props;

  const [activeCity] = useState(defaultCity);
  useEffect(() => {
    fillListOffers(activeCity.name);
  }, [activeCity]);

  const isActiveLogoLink = true;

  return (
    <div className={`page page--gray page--main ${(placeOffers.length === 0) && 'page__main--index-empty'}`}>
      <Header isActiveLogoLink={isActiveLogoLink} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {listCities.map((itemCity) => (
                <ItemCity key={itemCity} itemCity={itemCity} changeCity={changeCity} defaultCity={defaultCity} />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {(placeOffers.length === 0) ? <PlacesEmpty /> : <Places />}
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  placeOffers: placeOffersProp,
  defaultCity: defaultCityProp,
  listCities: listCitiesProp,
  fillListOffers: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  defaultCity: state.defaultCity,
  placeOffers: state.placeOffers,
  listCities: state.listCities,
});

const mapDispatchToProps = (dispatch) => ({
  fillListOffers(evt) {
    dispatch(ActionCreator.fillListOffers(evt));
  },
  changeCity(evt) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(evt.target.textContent));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
