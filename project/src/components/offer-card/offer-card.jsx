import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import placeOfferProp from '../offer-card/offer-card.prop';
import {ClassNameProp} from '../offer-list/offer-list.prop';

import {RATING_WEIGHT} from '../../const';

function OfferCard(props) {
  const {offer, ClassName, setCurrentOffer} = props;
  const ratingValue = `${offer.rating * RATING_WEIGHT}%`;

  function handleMouseOver(evt) {
    const currentCardId = Number(evt.target.id);
    setCurrentOffer(currentCardId);
  }

  return (
    <article
      className={`${ClassName.card} place-card`}
      id={offer.id}
      onMouseOver={handleMouseOver}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${ClassName.imageWrap} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}  type="button">
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
  ClassName: ClassNameProp,
  setCurrentOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentOffer(cardId) {
    dispatch(ActionCreator.setCurrentOffer(cardId));
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
