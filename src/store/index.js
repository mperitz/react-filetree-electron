import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import logger from 'redux-logger'

export default createStore(
  reducer,
  applyMiddleware(logger)
);
