import React from 'react';

import ReviewsItem from '../reviews-item/reviews-item';

import {commentsProp} from './reviews-list.prop';

import {sortComments} from '../../utils/sorting';

function ReviewsList({comments}) {
  const sortingComments = sortComments(comments);

  return (
    <ul className="reviews__list">
      {sortingComments.map((commentItem) => (
        <ReviewsItem key={commentItem.id} commentItem={commentItem} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  comments: commentsProp,
};

export default ReviewsList;
