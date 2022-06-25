import {combineReducers} from 'redux';
import dataReducer from './data.reducer';
const reducers = combineReducers({
    dataReducer: dataReducer,
  })

export default reducers;