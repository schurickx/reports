import { api } from './index';
import { BASE_PARAMS } from '../constants/api';



export const authAPI = {  
  login: ({login, pass}) => {
    const params = {
      ...BASE_PARAMS,
      action: `${BASE_PARAMS.action}.check`,
      login,
      pass
    }
    return api.get('/', { params });
  },  
  logout: () => {
    return api.delete('/login');
  },
}