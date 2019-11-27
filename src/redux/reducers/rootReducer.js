import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { authReducer } from './auth-reducer';
import { generalStatisticsOneReducer } from './general-statistic-one-reducer';
import { generalStatisticsAllReducer } from './general-statistic-all-reducer';
import { organizationListReducer } from './organization-list-reducer';
import initializeFormReducer from './initialize-values-in-form';


const reportsReducer = combineReducers({
    generalAll: generalStatisticsAllReducer,
    generalOne: generalStatisticsOneReducer,
    orgList: organizationListReducer
})

export const rootReducer = combineReducers({
    initForm: initializeFormReducer,
    form: formReducer,    
    auth: authReducer,
    reports: reportsReducer,
})