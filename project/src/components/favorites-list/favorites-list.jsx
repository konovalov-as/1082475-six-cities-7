import React from 'react';
import {connect} from 'react-redux';

import Logo from '../logo/logo';
import FavoritesItem from '../favorites-item/favorites-item';

import placeOffersProp from '../offer-list/offer-list.prop';
import uniquePlaceProp from '../../mocks/place-offers.prop';

function FavoritesList(props) {
  const {placeOffers, uniquePlaces} = props;

  return (
    <div className="page">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {uniquePlaces.map((uniquePlace) => {
                const favoritesOffers = placeOffers.filter((placeOffer) => (placeOffer.city.name === uniquePlace && placeOffer.isFavorite));
                return favoritesOffers.length ? <FavoritesItem key={uniquePlace} uniquePlace={uniquePlace} favoritesOffers={favoritesOffers}/> : null;
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

FavoritesList.propTypes = {
  placeOffers: placeOffersProp,
  uniquePlaces: uniquePlaceProp,
};

const mapStateToProps = (state) => ({
  placeOffers: state.placeOffers,
  uniquePlaces: state.uniquePlaces,
});

export {FavoritesList};
export default connect(mapStateToProps, null)(FavoritesList);
