import React from 'react';
import {Link} from 'react-router-dom';

import placeOfferProp from '../offer-card/offer-card.prop';
import {handleCardHoverProp} from '../offer-card/offer-card.prop';

function OfferCard(props) {
  const {placeOffer, handleCardHover} = props;

  function handleMouseOver(evt) {
    const currentOffer = Number(evt.target.id);
    if (placeOffer.id === currentOffer) {
      handleCardHover(currentOffer);
    }
  }

  return (
    <article className="cities__place-card place-card"
      id={placeOffer.id}
      onMouseOver={handleMouseOver}
    >
      {placeOffer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${placeOffer.id}`}>
          <img className="place-card__image" src={placeOffer.previewImage} width="260" height="200" alt="Place image" id={placeOffer.id} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{placeOffer.type}</a>
        </h2>
        <p className="place-card__type">{placeOffer.type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  placeOffer: placeOfferProp,
  handleCardHover: handleCardHoverProp,
};

export default OfferCard;
