import { combineReducers } from 'redux';
import Github from './github';

const rootReducer = combineReducers({
  github: Github,
});

export default rootReducer;
