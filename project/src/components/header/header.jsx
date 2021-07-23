import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {useSelector, useDispatch} from 'react-redux';

import {logout} from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';

import Logo from '../logo/logo';

import { getAuthorizationStatus, getAuthInfo } from '../../store/selectors/user';

function Header({isActiveLogoLink}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authInfo = useSelector(getAuthInfo);
  authInfo.email = localStorage.getItem('email');

  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isActiveLogoLink={isActiveLogoLink}/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {(authorizationStatus === AuthorizationStatus.AUTH) ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.FAVORITES}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{authInfo.email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        logoutApp();
                      }}
                      to={AppRoute.MAIN}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.FAVORITES}
                    //
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isActiveLogoLink: PropTypes.bool,
};

export {Header};
export default Header;
