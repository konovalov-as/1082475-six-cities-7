import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

import {commentsProp} from './reviews.prop';

import {AuthorizationStatus} from '../../const';

import {getAuthorizationStatus} from '../../store/selectors/user';

function Reviews({comments, offerId}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments}/>
      {(authorizationStatus === AuthorizationStatus.AUTH) ? <ReviewsForm offerId={offerId}/> : ''}
    </section>
  );
}

Reviews.propTypes = {
  comments: commentsProp,
  offerId: PropTypes.number.isRequired,
};

export {Reviews};
export default Reviews;
