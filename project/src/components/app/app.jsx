import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App({placeOffers}) {
  return <Main placeOffers = {placeOffers} />;
}

App.propTypes = {
  placeOffers: PropTypes.array.isRequired,
};

export default App;
