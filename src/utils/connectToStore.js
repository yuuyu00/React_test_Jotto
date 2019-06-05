import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";

import sagas from "../sagas";

export default (component, initialState = null) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    initialState || reducers,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(sagas);

  return <Provider store={store}>{component}</Provider>;
};
