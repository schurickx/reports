import { START, SUCCESS, ERROR } from '../../constants/action-postfix'
import { call, put, takeEvery } from 'redux-saga/effects';
import { reportsAPI } from '../../api/reports';
import { stopSubmit } from 'redux-form'
import { createActions } from '../factory/actionFactory';


const ORGANIZATION_LIST_REQUEST = "ORGANIZATION_LIST_REQUEST";

const initialState = {
  data: [],
  isLoading: false,
  error: null
}

export const organizationListReducer = (state = initialState, action) => {
  switch (action.type) {

    case `${ORGANIZATION_LIST_REQUEST}${START}`:
      return {
        data: [],
        isLoading: true,
        error: null
      };
    case `${ORGANIZATION_LIST_REQUEST}${SUCCESS}`:
      return {
        data: action.payload,
        isLoading: false,
        error: null
      };

    case `${ORGANIZATION_LIST_REQUEST}${ERROR}`:
      return {
        data: null,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

// ACTIONS

export const organizationList = createActions('organizationList', ORGANIZATION_LIST_REQUEST)

// SAGAS

export function* organizationListWatcher() {
  yield takeEvery(`${ORGANIZATION_LIST_REQUEST}${START}`, organizationListWorker)
}

function* organizationListWorker({ payload }) {
  try {
    const res = yield call(reportsAPI.organizationList, payload)
    yield put(organizationList.organizationListRequestSuccess(res.data.Answer.Data))
  } catch (error) {
    yield put(organizationList.organizationListRequestError(error.response.data));
    const message = error.response.data.Answer.Message || 'Возникла непредвиденная ошибка';
    yield put(stopSubmit('orglist', { _error: message }));
  }
}