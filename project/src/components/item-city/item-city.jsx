import React from 'react';
import PropTypes from 'prop-types';

import {cityProp} from '../../const.prop';

function getStyleLink(city, itemCity) {
  return (city.name === itemCity) ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
}

function ItemCity(props) {
  const {city, itemCity, changeCity} = props;

  return (
    <li
      onClick={changeCity}
      className="locations__item"
    >
      <a className={getStyleLink(city, itemCity)} href="#">
        <span>{itemCity}</span>
      </a>
    </li>
  );
}

ItemCity.propTypes = {
  city: cityProp,
  itemCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default ItemCity;
