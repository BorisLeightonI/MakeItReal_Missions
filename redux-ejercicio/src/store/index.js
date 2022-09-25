import {legacy_createStore} from 'redux';
import countReducer from './reducers/count.reducer';

export const store = legacy_createStore(countReducer)