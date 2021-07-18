import PropTypes from 'prop-types';

export default PropTypes.arrayOf(PropTypes.string);

export const cityProp = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
}).isRequired;
