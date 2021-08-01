import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { ActionType } from './action';
import {
  checkAuth,
  login,
  fetchOffersList,
  // fetchDetailOfferInfo,
  logout,
  postComment
  // fetchFavoritesList
  // toggleFavorite
} from './api-action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import { adaptOfferToClient, adaptOfferCommentsToClient, adaptUserToClient } from '../utils/adapter';

const mockOffers = [
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    'preview_image': 'https://7.react.pages.academy/static/hotel/15.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
    ],
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    'is_favorite': false,
    'is_premium': false,
    rating: 4.3,
    type: 'hotel',
    bedrooms: 3,
    'max_adults': 8,
    price: 291,
    goods: [
      'Towels',
      'Fridge',
      'Air conditioning',
      'Washing machine',
      'Breakfast',
      'Dishwasher',
      'Laptop friendly workspace',
      'Coffee machine',
      'Washer',
      'Baby seat',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      'is_pro': true,
      'avatar_url': 'img/avatar-angelina.jpg',
    },
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    location: {
      latitude: 48.83961,
      longitude: 2.342499,
      zoom: 16,
    },
    id: 1,
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
    'preview_image': 'https://7.react.pages.academy/static/hotel/8.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
    ],
    title: 'The Joshua Tree House',
    'is_favorite': false,
    'is_premium': false,
    rating: 3.5,
    type: 'house',
    bedrooms: 2,
    'max_adults': 8,
    price: 125,
    goods: [
      'Baby seat',
      'Breakfast',
      'Laptop friendly workspace',
      'Towels',
      'Air conditioning',
      'Fridge',
      'Washer',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      'is_pro': true,
      'avatar_url': 'img/avatar-angelina.jpg',
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    id: 2,
  },
];

const mockComments = [
  {
    id: 1,
    user: {
      id: 15,
      'is_pro': false,
      name: 'Kendall',
      'avatar_url': 'https://7.react.pages.academy/static/avatar/6.jpg',
    },
    rating: 2,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2021-07-05T08:50:43.820Z',
  },
  {
    id: 2,
    user: {
      id: 19,
      'is_pro': false,
      name: 'Christina',
      'avatar_url': 'https://7.react.pages.academy/static/avatar/10.jpg',
    },
    rating: 3,
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2021-07-05T08:50:43.820Z',
  },
];

const fakeUser = {
  'avatar_url': 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  'is_pro': false,
  name: 'Oliver.conner',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
};

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [fakeUser]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({ email: fakeUser.email, password: '123456' });

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: adaptUserToClient(fakeUser),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, mockOffers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: mockOffers.map((mockOffer) => adaptOfferToClient(mockOffer)),
        });
      });
  });

  // it('should make a correct API call to GET /hotels/:id/nearby', () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const offerId = 1;
  //   const nearbyOffersLoader = fetchDetailOfferInfo(offerId);

  //   apiMock
  //     .onGet(`${APIRoute.OFFERS}/${offerId}/nearby`)
  //     .reply(200, mockOffers);

  //   return nearbyOffersLoader(dispatch, () => {}, api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(1);
  //       expect(dispatch).toHaveBeenNthCalledWith(1, {
  //         type: ActionType.LOAD_NEARBY_OFFER,
  //         payload: mockOffers.map((mockOffer) => adaptOfferToClient(mockOffer)),
  //       });
  //     });
  // });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOGOUT,
        });
      });
  });

  it('should make a correct API call to POST /comments/:hotel_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const reviewSender = postComment({comment: 'comment', rating: 4}, offerId);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${offerId}`)
      .reply(200, mockComments);


    return reviewSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_OFFER_COMMENT,
          payload: mockComments.map((mockComment) => adaptOfferCommentsToClient(mockComment)),
        });
      });
  });

  // it('should make a correct API call to GET /favorite', () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const favoritesOffersLoader = fetchFavoritesList();

  //   apiMock
  //     .onGet(APIRoute.FAVORITE)
  //     .reply(200, mockOffers);

  //   return favoritesOffersLoader(dispatch, () => {}, api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(1);
  //       expect(dispatch).toHaveBeenNthCalledWith(1, {
  //         type: ActionType.LOAD_FAVORITES_LIST,
  //         payload: mockOffers.map((mockOffer) => adaptOfferToClient(mockOffer))
  //       });
  //     });
  // });

  // toggleFavorite

});
