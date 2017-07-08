import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

let store;

if (process.NODE_ENV === 'development') {
  store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleWare(
        createLogger({ collapsed: true })
      )
    )
  )
} else {
  store = createStore(
    reducer
  );
}

export default store;
