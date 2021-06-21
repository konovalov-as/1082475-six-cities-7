import React from 'react';

import ReviewsItem from '../reviews-item/reviews-item';

import {commentsProp} from '../../mocks/comments.prop';

function ReviewsList({comment}) {
  const comments = comment.comments;

  return (
    <ul className="reviews__list">
      {comments.map((commentItem) => (
        <ReviewsItem key={commentItem.id} comment={commentItem} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  comment: commentsProp,
};

export default ReviewsList;
