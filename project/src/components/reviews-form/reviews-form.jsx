import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {postComment} from '../../store/api-action';

const ReviewLength = {
  MIN: 50,
  MAX: 300,
};

function ReviewsForm({offerId}) {
  const dispatch = useDispatch();

  const [, setReadonly] = useState(false);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);

  const resetForm = () => {
    setComment('');
    setRating(null);
  };

  const handleSuccess = () => {
    resetForm();
  };

  const handleFail = () => {
    setReadonly(false);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch(postComment({comment: comment, rating: rating}, offerId))
      .then(() => handleSuccess())
      .catch(() => handleFail());
  }

  const isDisabledButton = rating === null || comment.length < ReviewLength.MIN
    || comment.length > ReviewLength.MAX;

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={(evt) => setRating(Number(evt.target.value))}
          checked={rating === 5}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={(evt) => setRating(Number(evt.target.value))}
          checked={rating === 4}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={(evt) => setRating(Number(evt.target.value))}
          checked={rating === 3}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={(evt) => setRating(Number(evt.target.value))}
          checked={rating === 2}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={(evt) => setRating(Number(evt.target.value))}
          checked={rating === 1}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => setComment(evt.target.value)}
        value={comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{comment.length} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabledButton ? 'disabled' : ''}>Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export {ReviewsForm};
export default ReviewsForm;
