import React from 'react';
import { Provider } from "react-redux";
import Routes from '../Routes/Routes';
import {configureStore} from '../../redux/store/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import "react-datepicker/dist/react-datepicker.css";
import '../../css/global.css'

const store = configureStore();

window.__store = store

const App = () => {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
