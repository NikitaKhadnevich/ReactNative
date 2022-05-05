/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./rootReducer";
import { initialState } from "./initialState";

const enhancers = [];
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
