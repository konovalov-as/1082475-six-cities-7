import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fillListOffers, changeCity } from '../../store/action';

import Header from '../header/header';
import ItemCity from '../item-city/item-city';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';

import {getCity, getListCities, getPlaceOffers } from '../../store/selectors/offer-data';

function Main() {
  const city = useSelector(getCity);
  const placeOffers = useSelector(getPlaceOffers);
  const listCities = useSelector(getListCities);

  const dispatch = useDispatch();

  const handleFillListOffers =  (evt) => {
    dispatch(fillListOffers(evt));
  };
  const handleChangeCity = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(evt.target.textContent));
  };

  const [activeCity] = useState(city);
  useEffect(() => {
    handleFillListOffers(activeCity.name);
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
                <ItemCity key={itemCity} itemCity={itemCity} changeCity={handleChangeCity} city={city} />
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

export {Main};
export default Main;
