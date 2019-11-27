import { START, SUCCESS, ERROR } from '../../constants/action-postfix'
import { call, put, takeLatest } from 'redux-saga/effects';
import { reportsAPI } from '../../api/reports';
import { createActions } from '../factory/actionFactory';
import { stopSubmit } from 'redux-form';


const GENERAL_STATISTIC_ONE_REQUEST = "GENERAL_STATISTIC_ONE_REQUEST";

const initialState = {
  data: [],
  isLoading: false,
  error: null
}

export const generalStatisticsOneReducer = (state = initialState, action) => {
  switch (action.type) {

    case `${GENERAL_STATISTIC_ONE_REQUEST}${START}`:
      return {
        data: [],
        isLoading: true,
        error: null
      };
    case `${GENERAL_STATISTIC_ONE_REQUEST}${SUCCESS}`:
      return {
        data: action.payload,
        isLoading: false,
        error: null
      };

    case `${GENERAL_STATISTIC_ONE_REQUEST}${ERROR}`:
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

export const generalStatOneAction = createActions('generalStatisticsOne', GENERAL_STATISTIC_ONE_REQUEST)

// SAGAS

export function* generalStatisticsOneWatcher() {
  yield takeLatest(`${GENERAL_STATISTIC_ONE_REQUEST}${START}`, generalStatisticsOneWorker)
}

function* generalStatisticsOneWorker({ payload }) {
  try {
    const res = yield call(reportsAPI.generalStatisticsOne, payload)
    yield put(generalStatOneAction.generalStatisticsOneRequestSuccess(res.data.Answer.Data))
  } catch (error) {
    yield put(generalStatOneAction.generalStatisticsOneRequestError(error.response.data));
    const messageError = error.response.data.Answer.Message;
    const message = messageError.length > 0 ? messageError : 'Возникла непредвиденная ошибка'
    yield put(stopSubmit('generalStatOne', { _error: message }));
  }
}