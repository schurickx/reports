import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers/rootReducer';
import rootSaga from "../sagas";

const initialState = {};

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      sagaMiddleware,
      logger
    )
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("../reducers/rootReducer", () => {
      const nextRootReducer = require("../reducers/rootReducer");
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
};

