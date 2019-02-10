import {
  LOAD_ORBIT_DEFS_SUCCESS,
  ORBIT_DEFS_CHANGE,
  STATE_CHANGE,
} from '../constants/actionTypes';

import initialState from './initialState';

export default function orbitDefsReducer(state = initialState.orbitDefs, action) {

  switch (action.type) {

    case LOAD_ORBIT_DEFS_SUCCESS:
      return action.orbitDefs;

    case ORBIT_DEFS_CHANGE:
      return action.orbitDefs;

    case STATE_CHANGE:
      return action.orbitDefs;

    default:
      return state;
  }

}

