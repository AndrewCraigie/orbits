import { combineReducers } from 'redux';
import appSettings from './appSettingsReducer';
import orbitDefs from './orbitDefsReducer';

const rootReducer = combineReducers({
  // these combine to create 'state'
  orbitDefs,
  appSettings,
});

export default rootReducer;
