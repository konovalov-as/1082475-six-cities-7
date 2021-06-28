import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import Logo from '../logo/logo';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import ItemCity from '../item-city/item-city';
import NoPlaces from '../no-places/no-places';

import placeOffersProp from '../offer-list/offer-list.prop';
import {defaultCityProp} from '../../mocks/place-offers.prop';
import listCitiesProp from '../../mocks/list-cities.prop';

function Main(props) {
  const {defaultCity, placeOffers, listCities, fillListOffers, changeCity} = props;

  const [selectedOffer, setSelectedOffer] = useState({});
  const [activeCity] = useState(defaultCity);

  const handleCardHover = (cardId) => {
    const currentOffer = placeOffers.find((placeOffer) =>
      placeOffer.id === cardId,
    );
    setSelectedOffer(currentOffer);
  };

  useEffect(() => {
    fillListOffers(activeCity.name);
  }, [activeCity]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
          {(placeOffers.length === 0) ? <NoPlaces /> : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placeOffers.length} places to stay in Amsterdam</b>
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
                {<OfferList placeOffers={placeOffers} handleCardHover={handleCardHover} />}
              </section>
              <div className="cities__right-section">
                <Map selectedOffer={selectedOffer} />
              </div>
            </div>
          )}
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
