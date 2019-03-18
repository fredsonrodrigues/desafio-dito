import { combineReducers } from 'redux';
import { AppReducer } from './appReducer';

export const Reducers = combineReducers({
    appState: AppReducer
});