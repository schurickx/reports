import { START, SUCCESS, ERROR } from '../../constants/action-postfix'
import { call, put, takeLatest } from 'redux-saga/effects';
import { reportsAPI } from '../../api/reports';
import { createActions } from '../factory/actionFactory';
import { stopSubmit } from 'redux-form';


const GENERAL_STATISTIC_ALL_REQUEST = "GENERAL_STATISTIC_ALL_REQUEST";

const initialState = {
  data: [],
  isLoading: false,
  error: null
}

export const generalStatisticsAllReducer = (state = initialState, action) => {
  switch (action.type) {

    case `${GENERAL_STATISTIC_ALL_REQUEST}${START}`:
      return {
        data: [],
        isLoading: true,
        error: null
      };
    case `${GENERAL_STATISTIC_ALL_REQUEST}${SUCCESS}`:
      return {
        data: action.payload,
        isLoading: false,
        error: null
      };

    case `${GENERAL_STATISTIC_ALL_REQUEST}${ERROR}`:
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

export const generalStatAllAction = createActions('generalStatisticsAll', GENERAL_STATISTIC_ALL_REQUEST)

// SAGAS

export function* generalStatisticsAllWatcher() {
  yield takeLatest(`${GENERAL_STATISTIC_ALL_REQUEST}${START}`, generalStatisticsAllWorker)
}

function* generalStatisticsAllWorker({ payload }) {
  try {
    const res = yield call(reportsAPI.generalStatisticsAll, payload)
    yield put(generalStatAllAction.generalStatisticsAllRequestSuccess(res.data.Answer.Data))
    // yield put(stopSubmit('generalStatAll'))  // // для разблокировки кнопки после загрузки
  } catch (error) {
    yield put(generalStatAllAction.generalStatisticsAllRequestError(error.response.data));    
  }
}