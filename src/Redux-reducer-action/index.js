import {combineReducers} from 'redux'
import Order from './OrderReducer'

const reducers = combineReducers({
    Orders:Order,
});

export default reducers;