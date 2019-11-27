
import { all } from 'redux-saga/effects';
import {authWatcher} from '../reducers/auth-reducer';
import { generalStatisticsOneWatcher } from '../reducers/general-statistic-one-reducer';
import { generalStatisticsAllWatcher } from '../reducers/general-statistic-all-reducer';
import { organizationListWatcher } from '../reducers/organization-list-reducer';

export default function* rootSaga() {
    yield all([
        authWatcher(),
        generalStatisticsAllWatcher(),
        generalStatisticsOneWatcher(),
        organizationListWatcher()
    ])
}