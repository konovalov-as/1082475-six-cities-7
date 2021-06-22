import React from 'react';

import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

import {commentsProp} from '../../mocks/comments.prop';

function Reviews(props) {
  const {comment} = props;
  const reviewsCount = comment.comments.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewsList comment={comment}/>
      <ReviewsForm />
    </section>
  );
}

Reviews.propTypes = {
  comment: commentsProp,
};

export default Reviews;
