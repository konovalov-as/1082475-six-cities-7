import React from 'react';
import {Link} from 'react-router-dom';

import placeOfferProp from '../offer-card/offer-card.prop';

const RATING_WEIGHT = 20;

function NearOfferCard(props) {
  const {nearOffer} = props;
  const ratingValue = `${nearOffer.rating * RATING_WEIGHT}%`;

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${nearOffer.id}`}>
          <img className="place-card__image" src={nearOffer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{nearOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${nearOffer.isFavorite && 'place-card__bookmark-button--active'} button`}  type="button">
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
          <Link to={`/offer/${nearOffer.id}`}>
            {nearOffer.title}
          </Link>
        </h2>
        <p className="place-card__type">{nearOffer.type.charAt(0).toUpperCase() + nearOffer.type.slice(1)}</p>
      </div>
    </article>
  );
}

NearOfferCard.propTypes = {
  nearOffer: placeOfferProp,
};

export default NearOfferCard;
