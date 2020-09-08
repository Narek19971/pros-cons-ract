import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listReducers from './listReducers';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  lists:listReducers()
});

export default rootReducer;
