import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { rootReducer, StoreState } from './rootReducer';


export const configureStore = (): Store<StoreState> => {
  const middlewares: Middleware[] = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, composedEnhancers);

  return store;
}