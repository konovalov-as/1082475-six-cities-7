import React from 'react';

import {commentProp} from './reviews-item.prop';

import {formatDate} from '../../utils/formate-date';
import {RATING_WEIGHT} from '../../const';

function ReviewsItem(props) {
  const {commentItem} = props;
  const ratingValue = `${commentItem.rating * RATING_WEIGHT}%`;

  const date = new Date(commentItem.date);
  const reviewsDate = formatDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={commentItem.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {commentItem.user.name}
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
          {commentItem.comment}
        </p>
        <time className="reviews__time" dateTime={commentItem.date}>{reviewsDate}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  commentItem: commentProp,
};

export default ReviewsItem;
