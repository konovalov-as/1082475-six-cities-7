import React from 'react';
import PropTypes from 'prop-types';

import {defaultCityProp} from '../../mocks/place-offers.prop';

function getStyleLink(defaultCity, itemCity) {
  return (defaultCity.name === itemCity) ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
}

function ItemCity(props) {
  const {defaultCity, itemCity, changeCity} = props;

  return (
    <li
      onClick={changeCity}
      className="locations__item"
    >
      <a className={getStyleLink(defaultCity, itemCity)} href="#">
        <span>{itemCity}</span>
      </a>
    </li>
  );
}

ItemCity.propTypes = {
  defaultCity: defaultCityProp,
  itemCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default ItemCity;
