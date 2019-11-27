import { api } from './index';
import { BASE_PARAMS } from '../constants/api';
import { formatDate } from './../utils/formatDate';


export const reportsAPI = {

  generalStatisticsAll: (payload) => {
    const params = {
      ...BASE_PARAMS,
      ...payload,
      date: formatDate(payload.date),
      action: `${BASE_PARAMS.action}.report.GeneralStatisticsAll`,
    }
    return api.get('/', { params });
  },
  generalStatisticsOne: (payload) => {
    const params = {
      ...BASE_PARAMS,
      ...payload,
      date: formatDate(payload.date),
      action: `${BASE_PARAMS.action}.report.GeneralStatisticsOne`,
    }
    return api.get('/', { params });
  },
  organizationList: ({ login, pass }) => {
    const params = {
      ...BASE_PARAMS,
      login,
      pass,
      action: `${BASE_PARAMS.action}.list.organizations`,
    }
    return api.get('/', { params });
  },
}

