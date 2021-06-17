import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import placeOffers, {uniquePlaces} from './mocks/place-offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      placeOffers = {placeOffers}
      uniquePlaces = {uniquePlaces}
    />
  </React.StrictMode>,
  document.getElementById('root'));
