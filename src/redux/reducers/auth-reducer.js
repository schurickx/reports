import { START, SUCCESS,ERROR } from '../../constants/action-postfix'
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { authAPI } from './../../api/auth';
import { stopSubmit } from 'redux-form'

  
  const AUTH_REQUEST = "AUTH_REQUEST";
  const CHECK_AUTH_REQUEST = "CHECK_AUTH_REQUEST";
  const RESET_AUTH_DATA = "RESET_AUTH_DATA";

  const initialState = {
    data: undefined,
    error: null
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case RESET_AUTH_DATA:
        return {
          data: null,
          error: null
        };
  
      case `${AUTH_REQUEST}${SUCCESS}`:
        return {
          data: action.payload,
          error: null
        };
  
      case `${CHECK_AUTH_REQUEST}${SUCCESS}`:
        return {
          data: action.payload,
          error: null
        };
  
      case `${AUTH_REQUEST}${ERROR}`:
        return {
          data: null,
          error: action.payload
        };
  
      case `${CHECK_AUTH_REQUEST}${ERROR}`:
        return {
          data: null,
          error: null
        };
  
      default:
        return state;
    }
  };

  // ACTIONS

  export const authRequestStart = (login, pass) => ({
    type: `${AUTH_REQUEST}${START}`,
    payload: { login, pass }
  });
  
  export const authRequestSuccess = (data, id) => ({
    type: `${AUTH_REQUEST}${SUCCESS}`,
    payload: {...data, id}
  });
  
  export const authRequestError = (data) => ({
    type: `${AUTH_REQUEST}${ERROR}`,
    payload: data
  });
  
  export const resetAuthData = () => ({
    type: RESET_AUTH_DATA
  });
  
  export const checkAuthRequestStart = () => ({
    type: `${CHECK_AUTH_REQUEST}${START}`
  });
  
  export const checkAuthRequestSuccess = (data) => ({
    type: `${CHECK_AUTH_REQUEST}${SUCCESS}`,
    payload: data
  });
  
  export const checkAuthRequestError = (data) => ({
    type: `${CHECK_AUTH_REQUEST}${ERROR}`,
    payload: data
  });

  // SAGAS

export function* authWatcher() {
    yield takeEvery(`${AUTH_REQUEST}${START}`, authWorker)
    yield takeLatest(`${CHECK_AUTH_REQUEST}${START}`, checkAuthWorker)
}

function* authWorker({payload}) {
    try {
        const res = yield call(authAPI.login, payload)
        yield put(authRequestSuccess(payload, res.data.Answer.Data.MID))
        yield put(stopSubmit('login'));
    } catch (error) {
        yield put(authRequestError(error.response.data));
        const messageError = error.response.data.Answer.Message;
        const message = messageError.length > 0 ? messageError : 'Возникла непредвиденная ошибка'
        yield put(stopSubmit('login', { _error: message }));
    }
}
  
function* checkAuthWorker() {
  try {
    const response = yield call(authAPI.checkAuth);
    yield put(checkAuthRequestSuccess(response.data));
  } catch (error) {
    yield put(checkAuthRequestError(error));
  }
}