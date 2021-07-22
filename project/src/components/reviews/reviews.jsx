import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

import {commentsProp} from './reviews.prop';

import {AuthorizationStatus} from '../../const';

function Reviews(props) {
  const {comments, offerId, authorizationStatus} = props;

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
  authorizationStatus: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Reviews};
export default connect(mapStateToProps, null)(Reviews);
