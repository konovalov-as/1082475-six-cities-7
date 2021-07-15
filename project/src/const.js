export const AppRoute = {
  SIGNIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  MAIN: '/',
  NOT_FOUND_SCREEN: '/not-found-screen',
};

export const RATING_WEIGHT = 20;

export const ReviewCount = {
  start: 0,
  end: 9,
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  NEARBY: '/nearby',
  COMMENTS: 'comments',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const city = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
};

export const listCities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
