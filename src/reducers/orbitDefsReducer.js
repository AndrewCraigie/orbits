import {
  ADD_NEW_ORBITDEF,
  DELETE_ORBITDEF,
  ORBIT_DEF_INPUT_CHANGE,
  LOAD_ORBIT_DEFS_SUCCESS
} from '../constants/actionTypes';

import initialState from './initialState';

export default function orbitDefsReducer(state = initialState.orbitDefs, action) {

  switch (action.type) {

    case LOAD_ORBIT_DEFS_SUCCESS:
      return action.orbitDefs;

    case ADD_NEW_ORBITDEF:
      return action.orbitDefs;

    case DELETE_ORBITDEF:
      return action.orbitDefs;

    case ORBIT_DEF_INPUT_CHANGE:
      return action.orbitDefs;

    default:
      return state;
  }

}

