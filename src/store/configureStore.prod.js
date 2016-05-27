import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState, appoloClient) {
  return createStore(rootReducer(appoloClient), initialState, applyMiddleware(appoloClient.middleware()));
}
