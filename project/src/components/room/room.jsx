import React from 'react';

import Reviews from '../reviews/reviews';

import commentsProp from '../../mocks/comments.prop';

function Room(props) {
  const {comments} = props;

  const url = window.location.pathname;
  const urlItems = url.split('/');
  const idOffer = Number(urlItems[2]);
  let review = {};

  comments.map((comment) => {
    if (comment.id === idOffer) {
      review = comment;
    }
  });

  return (
    <Reviews comment={review}/>
  );
}

Room.propTypes = {
  comments: commentsProp,
};

export default Room;
