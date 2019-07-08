import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk'
import reducers from './../Reducers'

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
   applyMiddleware(Thunk),
);
export const store = createStore(reducers,{loading : true}, enhancer);