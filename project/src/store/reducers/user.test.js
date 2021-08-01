import { user } from './user';
import { ActionType } from '../action';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: 'UNKNOWN',
        authInfo: {
          avatarUrl: '',
          email: '',
          id: 0,
          isPro: false,
          name: '',
          token: '',
        },
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: 'NO_AUTH'};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: 'AUTH'});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: 'AUTH'};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'NO_AUTH',
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: 'NO_AUTH'});
  });

  it('should update user info by loaded data', () => {
    const state = {
      authInfo: {
        avatarUrl: '',
        email: '',
        id: 0,
        isPro: false,
        name: '',
        token: '',
      },
    };

    const authInfo = {
      avatarUrl: '/img/avatar-1.jpg',
      email: 'mail@mail.ru',
      id: 1,
      isPro: true,
      name: 'proUser',
      token: 'opfdk3w9trgg430cv',
    };

    const setAuthInfo = {
      type: ActionType.SET_AUTH_INFO,
      payload: authInfo,
    };

    expect(user(state, setAuthInfo))
      .toEqual({
        authInfo: {
          avatarUrl: '/img/avatar-1.jpg',
          email: 'mail@mail.ru',
          id: 1,
          isPro: true,
          name: 'proUser',
          token: 'opfdk3w9trgg430cv',
        },
      });
  });

  it('should exit the application', () => {
    const state = {
      authorizationStatus: 'AUTH',
      authInfo: {
        avatarUrl: '/img/avatar-1.jpg',
        email: 'mail@mail.ru',
        id: 1,
        isPro: true,
        name: 'proUser',
        token: 'opfdk3w9trgg430cv',
      },
    };


    const requiredAuthorizationAction  = {
      type: ActionType.LOGOUT,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: 'NO_AUTH',
        authInfo: {},
      });
  });
});
