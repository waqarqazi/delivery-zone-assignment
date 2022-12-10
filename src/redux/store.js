import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {allReducers} from './reducers/index';

const rootReducer = allReducers;

export const Store = createStore(rootReducer, applyMiddleware(thunk));
