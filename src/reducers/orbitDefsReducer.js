import {
  ADD_NEW_ORBITDEF,
  DELETE_ORBITDEF,
  ORBIT_DEF_INPUT_CHANGE,
  LOAD_ORBIT_DEFS_SUCCESS
} from '../constants/actionTypes';

import initialState from './initialState';

export default function orbitDefsReducer(state = initialState.orbitDefs, action) {

  let newState;
  let newOrbitDef;

  switch (action.type) {

    case LOAD_ORBIT_DEFS_SUCCESS:
      return action.orbitDefs;

    case ADD_NEW_ORBITDEF:
      newOrbitDef = Object.assign({}, action.defaultOrbit);
      newOrbitDef.orbitDefId = action.id;
      newState = [...state, newOrbitDef];

      return newState;

    case DELETE_ORBITDEF:

      newState = state.filter(orbitDef => {
        if (orbitDef.orbitDefId !== action.orbitDef.orbitDefId) {
          return Object.assign({}, orbitDef);
        }
      });

      return newState;

    case ORBIT_DEF_INPUT_CHANGE:

      newState = state.map(orbitDef => {

        let newOrbDef = Object.assign({}, orbitDef);
        if (newOrbDef.orbitDefId === action.orbitDef.orbitDefId) {
          newOrbDef[action.orbitDefPropertyName] = action.orbitDefPropertyValue;
        }
        return newOrbDef;

      });

      return newState;

    default:
      return state;
  }

}

