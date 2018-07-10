import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import getRootReducer from './reducers';

export default function getStore() {
  const devTools = window.devToolsExtension && (__DEV__);

  return createStore(
    getRootReducer(),
    devTools && window.devToolsExtension(),
    applyMiddleware(thunk),
  );
}
