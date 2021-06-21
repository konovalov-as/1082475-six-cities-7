import React from 'react';

import {commentProp} from '../../mocks/comments.prop';

const RATING_WEIGHT = 20;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDate(date) {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${MONTHS[monthIndex]} ${year}`;
}

function ReviewsItem(props) {
  const {comment} = props;
  const ratingValue = `${comment.rating * RATING_WEIGHT}%`;

  const date = new Date(comment.date);
  const reviewsDate = formatDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingValue}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>{reviewsDate}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  comment: commentProp,
};

export default ReviewsItem;
