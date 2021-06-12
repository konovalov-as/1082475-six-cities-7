import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import placeOffers from './mocks/place-offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      placeOffers = {placeOffers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
