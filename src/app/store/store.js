import { createStore, applyMiddleware } from 'redux';
import EventsReducer from '../actions/eventActions';


const configureStore = (preloadedState = {}) => (
  createStore(
    EventsReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
