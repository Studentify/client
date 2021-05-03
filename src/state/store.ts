import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { rootReducer, StoreState } from './rootReducer';


function configureStore(): Store<StoreState> {
  const middlewares: Middleware[] = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, composedEnhancers);

  return store;
}

export const store = configureStore();
export type AppDispatch = typeof store.dispatch;