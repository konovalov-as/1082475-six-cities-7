import React from 'react';

import ReviewsItem from '../reviews-item/reviews-item';

import {commentsProp} from '../../mocks/comments.prop';

const ReviewCount = {
  start: 0,
  end: 9,
};

const sortCommentsByDate = (commentA, commentB) => {
  if (commentA.date > commentB.date) {
    return -1;
  }
  if (commentA.date < commentB.date) {
    return 1;
  }
  return 0;
};

function ReviewsList({comment}) {
  const comments = comment.comments;
  const sortingComments = comments.slice().sort(sortCommentsByDate);

  return (
    <ul className="reviews__list">
      {sortingComments.slice(ReviewCount.start, ReviewCount.end).map((commentItem) => (
        <ReviewsItem key={commentItem.id} comment={commentItem} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  comment: commentsProp,
};

export default ReviewsList;
