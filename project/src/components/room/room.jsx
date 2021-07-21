import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../header/header';
import Reviews from '../reviews/reviews';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import GalleryList from '../gallery-list/gallery-list';
import InsideItem from '../inside-item/inside-item';

import {cityProp} from '../../const.prop';
import placeOffersProp from '../offer-list/offer-list.prop';
import {commentsProp} from '../reviews/reviews.prop';

import {getPlaceOffer, getOfferPhotos} from '../../utils/offer-detail';
import {RATING_WEIGHT} from '../../const';

function Room(props) {
  const {city, placeOffers, detailOfferInfo, offerId} = props;
  const isActiveLogoLink = false;

  const className = {
    placesList: 'near-places__list',
    card: 'near-places__card',
    imageWrap: 'near-places__image-wrapper',
  };

  const placeOffer = getPlaceOffer(offerId, placeOffers);
  const offerPhotos = getOfferPhotos(placeOffer);

  const ratingValue = `${placeOffer.rating * RATING_WEIGHT}%`;

  return (
    <div className="page">
      <Header isActiveLogoLink={isActiveLogoLink} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <GalleryList offerPhotos={offerPhotos}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {(placeOffer.isPremium) ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {placeOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingValue}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{placeOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {placeOffer.type.charAt(0).toUpperCase() + placeOffer.type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {placeOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {placeOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{placeOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {placeOffer.goods.map((goodsItem, i) => <InsideItem key={goodsItem + i.toString()} goodsItem={goodsItem} />)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${(placeOffer.host.isPro) ? 'property__avatar-wrapper--pro' : ''}  user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {placeOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {(placeOffer.host.isPro) ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {placeOffer.description}
                  </p>
                </div>
              </div>
              <Reviews comments={detailOfferInfo.comments} offerId={offerId}/>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} placeOffers={detailOfferInfo.nearbyOffers} selectedOffer={placeOffers[offerId - 1]} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList placeOffers={detailOfferInfo.nearbyOffers} className={className} />
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  city: cityProp,
  placeOffers: placeOffersProp,
  detailOfferInfo: PropTypes.exact({
    comments: commentsProp,
    nearbyOffers: placeOffersProp,
  }).isRequired,
  offerId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  placeOffers: state.placeOffers,
  detailOfferInfo: state.detailOfferInfo,
});

export {Room};
export default connect(mapStateToProps, null)(Room);
