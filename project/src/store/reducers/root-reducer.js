
import {combineReducers} from 'redux';
import { offerData } from './offer-data';
import { user } from './user';

export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: offerData,
  [NameSpace.USER]: user,
});
