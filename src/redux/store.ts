import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const configureStore = () => {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const store = createStore(rootReducer(), {}, composeEnhancers(...enhancers));

  return store;
};
