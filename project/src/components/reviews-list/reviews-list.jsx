import React from 'react';

import ReviewsItem from '../reviews-item/reviews-item';

import {commentsProp} from '../../mocks/comments.prop';

import {ReviewCount} from '../../const';
import {sortComments} from '../../utils/sorting';

function ReviewsList({comment}) {
  const comments = comment.comments;
  const sortingComments = sortComments(comments);

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
