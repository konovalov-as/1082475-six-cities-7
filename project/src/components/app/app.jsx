import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App({offersPlace}) {
  return <Main offersPlace = {offersPlace} />;
}

App.propTypes = {
  offersPlace: PropTypes.array.isRequired,
};

export default App;
