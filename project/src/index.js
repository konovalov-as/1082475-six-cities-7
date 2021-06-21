import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import placeOffers, {uniquePlaces, firstOffer} from './mocks/place-offers';
import {comments} from './mocks/comments';

ReactDOM.render(
  <React.StrictMode>
    <App
      placeOffers = {placeOffers}
      uniquePlaces = {uniquePlaces}
      firstOffer = {firstOffer}
      comments = {comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
