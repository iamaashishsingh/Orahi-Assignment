import {combineReducers} from 'redux';
import addReducer from './addReducer';

const appReducer = combineReducers({
    add: addReducer
})

export default appReducer;