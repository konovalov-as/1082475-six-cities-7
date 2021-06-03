import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App({offersCount}) {
  return <Main offersCount = {offersCount} />;
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
