import {combineReducers} from 'redux';
import AppReducer from './app-reducers';
import EventReducer from './event-reducers';

export const allReducers = combineReducers({
  app: AppReducer,
  event: EventReducer,
});
