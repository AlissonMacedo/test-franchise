import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import chart from './chart/sagas';

export default function* rootSaga() {
  return yield all([auth, chart]);
}
