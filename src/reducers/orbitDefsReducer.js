import {
  LOAD_APP_SETTINGS_SUCCESS,
  LOAD_ORBIT_DEFS_SUCCESS,
  ORBIT_DEFS_CHANGE,
  STATE_CHANGE, TIME_INCREMENT,
} from '../constants/actionTypes';

import initialState from './initialState';

export default function orbitDefsReducer(state = initialState.orbitDefs, action) {

  switch (action.type) {

    case LOAD_ORBIT_DEFS_SUCCESS:
      return action.orbitDefs;

    case LOAD_APP_SETTINGS_SUCCESS:
      return action.orbitDefs;

    case ORBIT_DEFS_CHANGE:
      return action.orbitDefs;

    case STATE_CHANGE:
      return action.orbitDefs;

    case TIME_INCREMENT:
      return action.orbitDefs;

    default:
      return state;
  }

}

