import { offerData } from './offer-data';
import { ActionType } from '../action';

const offers = [{
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  images: [
    'https://7.react.pages.academy/static/hotel/16.jpg',
    'https://7.react.pages.academy/static/hotel/19.jpg',
    'https://7.react.pages.academy/static/hotel/20.jpg',
    'https://7.react.pages.academy/static/hotel/2.jpg',
    'https://7.react.pages.academy/static/hotel/12.jpg',
    'https://7.react.pages.academy/static/hotel/13.jpg',
    'https://7.react.pages.academy/static/hotel/5.jpg',
    'https://7.react.pages.academy/static/hotel/1.jpg',
    'https://7.react.pages.academy/static/hotel/15.jpg',
    'https://7.react.pages.academy/static/hotel/3.jpg',
    'https://7.react.pages.academy/static/hotel/7.jpg',
    'https://7.react.pages.academy/static/hotel/14.jpg',
    'https://7.react.pages.academy/static/hotel/11.jpg',
    'https://7.react.pages.academy/static/hotel/18.jpg',
  ],
  title: 'Tile House',
  rating: 4.2,
  type: 'house',
  bedrooms: 3,
  price: 812,
  goods: [
    'Coffee machine',
    'Fridge',
    'Baby seat',
    'Washing machine',
    'Towels',
    'Laptop friendly workspace',
    'Air conditioning',
    'Dishwasher',
    'Breakfast',
    'Washer',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  location: {
    latitude: 48.87861,
    longitude: 2.357499,
    zoom: 16,
  },
  id: 1,
  previewImage: 'https://7.react.pages.academy/static/hotel/13.jpg',
  isFavorite: false,
  isPremium: false,
  maxAdults: 3,
},
{
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  images: [
    'https://7.react.pages.academy/static/hotel/17.jpg',
    'https://7.react.pages.academy/static/hotel/11.jpg',
    'https://7.react.pages.academy/static/hotel/7.jpg',
    'https://7.react.pages.academy/static/hotel/18.jpg',
    'https://7.react.pages.academy/static/hotel/8.jpg',
    'https://7.react.pages.academy/static/hotel/2.jpg',
    'https://7.react.pages.academy/static/hotel/3.jpg',
    'https://7.react.pages.academy/static/hotel/13.jpg',
    'https://7.react.pages.academy/static/hotel/12.jpg',
    'https://7.react.pages.academy/static/hotel/4.jpg',
    'https://7.react.pages.academy/static/hotel/19.jpg',
    'https://7.react.pages.academy/static/hotel/14.jpg',
    'https://7.react.pages.academy/static/hotel/10.jpg',
    'https://7.react.pages.academy/static/hotel/15.jpg',
  ],
  title: 'The Pondhouse - A Magical Place',
  rating: 3,
  type: 'house',
  bedrooms: 3,
  price: 901,
  goods: [
    'Baby seat',
    'Breakfast',
    'Towels',
    'Laptop friendly workspace',
    'Washer',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
  location: {
    latitude: 48.834610000000005,
    longitude: 2.335499,
    zoom: 16,
  },
  id: 5,
  previewImage: 'https://7.react.pages.academy/static/hotel/10.jpg',
  isFavorite: false,
  isPremium: false,
  maxAdults: 8,
},
{
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  images: [
    'https://7.react.pages.academy/static/hotel/8.jpg',
    'https://7.react.pages.academy/static/hotel/9.jpg',
    'https://7.react.pages.academy/static/hotel/12.jpg',
    'https://7.react.pages.academy/static/hotel/7.jpg',
    'https://7.react.pages.academy/static/hotel/11.jpg',
    'https://7.react.pages.academy/static/hotel/15.jpg',
    'https://7.react.pages.academy/static/hotel/14.jpg',
    'https://7.react.pages.academy/static/hotel/13.jpg',
    'https://7.react.pages.academy/static/hotel/10.jpg',
    'https://7.react.pages.academy/static/hotel/16.jpg',
    'https://7.react.pages.academy/static/hotel/19.jpg',
    'https://7.react.pages.academy/static/hotel/4.jpg',
    'https://7.react.pages.academy/static/hotel/6.jpg',
    'https://7.react.pages.academy/static/hotel/20.jpg',
  ],
  title: 'The Pondhouse - A Magical Place',
  rating: 3.6,
  type: 'hotel',
  bedrooms: 2,
  price: 337,
  goods: [
    'Air conditioning',
    'Cable TV',
    'Fridge',
    'Laptop friendly workspace',
    'Breakfast',
    'Washing machine',
    'Dishwasher',
    'Coffee machine',
    'Towels',
    'Washer',
    'Baby seat',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
  location: {
    latitude: 50.844556999999995,
    longitude: 4.346697,
    zoom: 16,
  },
  id: 3,
  previewImage: 'https://7.react.pages.academy/static/hotel/2.jpg',
  isFavorite: false,
  isPremium: false,
  maxAdults: 10,
},
{
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  images: [
    'https://7.react.pages.academy/static/hotel/1.jpg',
    'https://7.react.pages.academy/static/hotel/5.jpg',
    'https://7.react.pages.academy/static/hotel/8.jpg',
    'https://7.react.pages.academy/static/hotel/9.jpg',
    'https://7.react.pages.academy/static/hotel/16.jpg',
    'https://7.react.pages.academy/static/hotel/2.jpg',
    'https://7.react.pages.academy/static/hotel/20.jpg',
    'https://7.react.pages.academy/static/hotel/4.jpg',
    'https://7.react.pages.academy/static/hotel/11.jpg',
    'https://7.react.pages.academy/static/hotel/18.jpg',
    'https://7.react.pages.academy/static/hotel/17.jpg',
    'https://7.react.pages.academy/static/hotel/14.jpg',
    'https://7.react.pages.academy/static/hotel/12.jpg',
    'https://7.react.pages.academy/static/hotel/3.jpg',
  ],
  title: 'Waterfront with extraordinary view',
  rating: 3.7,
  type: 'house',
  bedrooms: 3,
  price: 453,
  goods: [
    'Laptop friendly workspace',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  location: {
    latitude: 50.833557,
    longitude: 4.374696999999999,
    zoom: 16,
  },
  id: 6,
  previewImage: 'https://7.react.pages.academy/static/hotel/13.jpg',
  isFavorite: false,
  isPremium: false,
  maxAdults: 6,
},
];

const comments = [
  {
    comment: 'comment',
    date: '2021-07-16T08:50:43.820Z',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: 'avatar1.jpg',
      id: 19,
      isPro: false,
      name: 'Christina',
    },
  },
  {
    comment: 'comment2',
    date: '2021-07-16T08:50:43.820Z',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: 'avatar2.jpg',
      id: 20,
      isPro: false,
      name: 'Mollie',
    },
  },
];

describe('Reducer: offer data', () => {
  it('without additional parameters should return initial state', () => {
    const city = {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    };

    const listCities = [
      'Paris',
      'Cologne',
      'Brussels',
      'Amsterdam',
      'Hamburg',
      'Dusseldorf',
    ];

    expect(offerData(undefined, {}))
      .toEqual({
        originOffers: [],
        placeOffers: [],
        detailOfferInfo: {
          nearbyOffers: [],
          comments: [],
        },
        city,
        listCities,
        isDataLoaded: false,
        isDetailOfferInfoLoaded: false,
        favoritesList: [],
      });
  });

  it('should change current city and fill offers list', () => {
    const state = {
      placeOffers: offers,
      originOffers: offers,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
      },
    };

    const changeCity = {
      type: ActionType.CHANGE_CITY,
      payload: {
        name: 'Paris',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13,
        },
      },
    };

    expect(offerData(state, changeCity))
      .toEqual({
        placeOffers: [],
        originOffers: offers,
        city: {
          name: 'Paris',
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      originOffers: [],
      placeOffers: [],
      isDataLoaded: false,
    };

    const loadOffers = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(offerData(state, loadOffers))
      .toEqual({
        originOffers: offers,
        placeOffers: offers,
        isDataLoaded: true,
      });
  });

  it('should update nearby offers by load nearby offers', () => {
    const state = {
      detailOfferInfo: {
        nearbyOffers: [],
      },
    };

    const loadNearbyOffer = {
      type: ActionType.LOAD_NEARBY_OFFER,
      payload: offers,
    };

    expect(offerData(state, loadNearbyOffer))
      .toEqual({
        detailOfferInfo: {
          nearbyOffers: offers,
        },
      });
  });

  it('should update offer comments by load comments', () => {
    const state = {
      detailOfferInfo: {
        comments: [],
      },
      isDetailOfferInfoLoaded: false,
    };

    const loadOfferComments = {
      type: ActionType.LOAD_OFFER_COMMENTS,
      payload: comments,
    };

    expect(offerData(state, loadOfferComments))
      .toEqual({
        detailOfferInfo: {
          comments: comments,
        },
        isDetailOfferInfoLoaded: true,
      });
  });

  it('should update offer comments by post comment', () => {
    const state = {
      detailOfferInfo: {
        comments: [],
      },
    };

    const postOfferComment = {
      type: ActionType.POST_OFFER_COMMENT,
      payload: comments,
    };

    expect(offerData(state, postOfferComment))
      .toEqual({
        detailOfferInfo: {
          comments: comments,
        },
      });
  });

  it('should update favorite offers by load favorite offers', () => {
    const state = {favoritesList: []};
    const loadFavoritesList = {
      type: ActionType.LOAD_FAVORITES_LIST,
      payload: offers,
    };

    expect(offerData(state, loadFavoritesList))
      .toEqual({favoritesList: offers});
  });
});

