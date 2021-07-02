import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Logo(props) {
  const {isActiveLogoLink} = props;

  return (
    <Link to="/" className={`header__logo-link ${isActiveLogoLink ? 'header__logo-link--active' : ''}`}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

Logo.propTypes = {
  isActiveLogoLink: PropTypes.bool.isRequired,
};

export default Logo;
