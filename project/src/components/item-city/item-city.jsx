import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
      <Link to="/" className={getStyleLink(city, itemCity)}>
        <span>{itemCity}</span>
      </Link>
    </li>
  );
}

ItemCity.propTypes = {
  city: cityProp,
  itemCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default ItemCity;
