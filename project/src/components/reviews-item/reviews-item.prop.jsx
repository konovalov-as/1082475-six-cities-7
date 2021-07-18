import PropTypes from 'prop-types';

export const commentProp = PropTypes.shape({
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
});
