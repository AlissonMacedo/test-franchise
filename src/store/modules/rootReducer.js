import { combineReducers } from 'redux';

import auth from './auth/reducer';
import chart from './chart/reducer';

export default combineReducers({
  auth,
  chart,
});
