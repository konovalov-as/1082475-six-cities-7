import React from 'react';

import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

import {commentsProp} from './reviews.prop';

function Reviews(props) {
  const {comments} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments}/>
      <ReviewsForm />
    </section>
  );
}

Reviews.propTypes = {
  comments: commentsProp,
};

export default Reviews;
