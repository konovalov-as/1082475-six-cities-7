import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import placeOffers, {uniquePlaces, firstOffer} from './mocks/place-offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      placeOffers = {placeOffers}
      uniquePlaces = {uniquePlaces}
      firstOffer = {firstOffer}
    />
  </React.StrictMode>,
  document.getElementById('root'));
