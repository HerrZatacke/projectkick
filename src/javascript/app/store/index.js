import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers.js';
import middleware from './middleware.js';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [
  applyMiddleware(middleware),
];

const getStore = (config) => (
  createStore(reducers, config, composeEnhancers(...enhancers))
);


export default getStore;
