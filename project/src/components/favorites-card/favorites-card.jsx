import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import placeOfferProp from '../offer-card/offer-card.prop';

import { toggleFavorite } from '../../store/api-action';

import {RATING_WEIGHT} from '../../const';

function FavoritesCard({favoritesOffer}) {
  const ratingValue = `${favoritesOffer.rating * RATING_WEIGHT}%`;

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(toggleFavorite({
      offerId: favoritesOffer.id,
      favoriteStatus: Number(!favoritesOffer.isFavorite),
    }));
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${favoritesOffer.id}`}>
          <img className="place-card__image" src={favoritesOffer.previewImage} width="150" height="110" alt="Beautiful place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{favoritesOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${favoritesOffer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingValue}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${favoritesOffer.id}`}>
            {favoritesOffer.title}
          </Link>
        </h2>
        <p className="place-card__type">{favoritesOffer.type.charAt(0).toUpperCase() + favoritesOffer.type.slice(1)}</p>
      </div>
    </article>
  );
}

FavoritesCard.propTypes = {
  favoritesOffer: placeOfferProp,
};

export default FavoritesCard;
