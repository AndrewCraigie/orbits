import {
  LOAD_APP_SETTINGS_SUCCESS,
  STATE_CHANGE,
  ORBIT_DEFS_CHANGE
} from '../constants/actionTypes';
import initialState from './initialState';

export default function appSettingsReducer(state = initialState.appSettings, action){

  switch(action.type){

    case LOAD_APP_SETTINGS_SUCCESS:
      return action.appSettings;

    case STATE_CHANGE:
      return action.appSettings;

    case ORBIT_DEFS_CHANGE:
      return action.appSettings;

    default:
      return state;

  }

}
