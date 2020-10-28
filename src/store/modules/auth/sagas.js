import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';
import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    // const { token } = payload;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaXR5IjoiU8OjbyBKb3PDqSBkbyBSaW8gUGFyZG8iLCJmcmFuY2hpc2VlSWQiOjEwfQ.6V5XFlgxEL6BBWDS3arWy_m-cDnK7G-m2akzF2v3iRg';
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/alfred');
  } catch (err) {
    alert('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
