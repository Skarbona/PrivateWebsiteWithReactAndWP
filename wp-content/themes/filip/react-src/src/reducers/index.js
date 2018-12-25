import { combineReducers } from 'redux';
import init from './init';
import portfolio from './portfolio';

export default combineReducers({
    init,
    portfolio,
});