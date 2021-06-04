import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const offersPlace = [
  {
    id: '0',
    title: 'Perfectly located Castro',
    previewImage: 'img/room.jpg',
    price: '539',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'Apartment',
    rating: 3.4,
    isPremium: false,
  },
  {
    id: '1',
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-01.jpg',
    price: '113',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'Room',
    rating: 4.9,
    isPremium: true,
  },
  {
    id: '2',
    title: 'Waterfront with extraordinary view',
    previewImage: 'img/apartment-02.jpg',
    price: '349',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a slow pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: 'Hotel',
    rating: 3.8,
    isPremium: false,
  },
  {
    id: '3',
    title: 'The Pondhouse - A Magical Place',
    previewImage: 'img/apartment-03.jpg',
    price: '621',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'House',
    rating: 2.9,
    isPremium: false,
  },
  {
    id: '4',
    title: 'The Pondhouse - A Magical Place',
    previewImage: 'img/room.jpg',
    price: '169',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'Room',
    rating: 3.1,
    isPremium: false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      offersPlace = {offersPlace}
    />
  </React.StrictMode>,
  document.getElementById('root'));
