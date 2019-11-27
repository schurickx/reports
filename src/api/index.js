import axios from 'axios';
import { BASE_URL } from "../constants/api";
import { resetAuthData } from "../redux/reducers/auth-reducer";
import store from '../../src/components/App/App';

const configureApi = (store) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.data.error && response.data.error.code === 401) {
        store.dispatch(resetAuthData());
      }
      return response;
    },
    (error) => {
      console.error(error);
      if (error.response.status === 401) {
        store.dispatch(resetAuthData());
      }
      return Promise.reject(error);
    });

  return instance;
};

export const api = configureApi(store);