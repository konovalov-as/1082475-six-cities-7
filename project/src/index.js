import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {checkAuth, fetchOffersList, fetchDetailOfferInfo} from './store/api-action';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';

import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

const setDetailOfferInfo = (offerId) => {
  store.dispatch(fetchDetailOfferInfo(offerId));
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App setDetailOfferInfo={setDetailOfferInfo}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
