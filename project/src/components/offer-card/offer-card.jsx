import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import placeOfferProp from '../offer-card/offer-card.prop';
import {classNameProp} from '../offer-list/offer-list.prop';

import { toggleFavorite } from '../../store/api-action';

import {RATING_WEIGHT} from '../../const';

function OfferCard({offer, className, handleMouseEnter, handleMouseLeave}) {
  const ratingValue = `${offer.rating * RATING_WEIGHT}%`;

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(toggleFavorite({
      offerId: offer.id,
      favoriteStatus: Number(!offer.isFavorite),
    }));
  };

  return (
    <article
      className={`${className.card} place-card`}
      id={offer.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className.imageWrap} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Amazing place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
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
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: placeOfferProp,
  className: classNameProp,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export {OfferCard};
export default OfferCard;
