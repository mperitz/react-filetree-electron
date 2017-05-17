// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import fileTree from './file-tree.js';

const rootReducer = combineReducers({
  router,
  fileTree
});

export default rootReducer;
