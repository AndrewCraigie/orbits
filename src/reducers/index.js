import { combineReducers } from 'redux';
import appSettings from './appSettingsReducer';
import orbitDefs from './orbitDefsReducer';
import curvePoints from './curvePointsReducer';

const rootReducer = combineReducers({
  // these combine to create 'state'
  orbitDefs,
  appSettings,
  curvePoints
});

export default rootReducer;
