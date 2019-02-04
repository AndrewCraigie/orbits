import {ADD_NEW_ORBITDEF, DELETE_ORBITDEF, ORBIT_DEF_INPUT_CHANGE} from '../constants/actionTypes';
// Import any helper functions here
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function orbitsSettingsReducer(state = initialState.orbitsSettings, action){

  let newState;
  let newOrbitDef;

  switch(action.type){

    case ADD_NEW_ORBITDEF:

      newState = {
        ...state,
        orbitDefs: state.orbitDefs.map(orb => {
          return objectAssign({}, orb);
        })
      };

      newOrbitDef = objectAssign({}, state.defaultOrbit);
      newOrbitDef.orbitDefId = "56";

      // Need to get unique id
      newState.orbitDefs.push(newOrbitDef);


      return newState;

    case DELETE_ORBITDEF:

      newState = {
        ...state,
        orbitDefs: state.orbitDefs.filter(orb => {

          if(orb.orbitDefId !== action.orbitDef.orbitDefId){
            return objectAssign({}, orb);
          }

        })
      };

      return newState;

    case ORBIT_DEF_INPUT_CHANGE:

      newState = {
        ...state,
        orbitDefs: state.orbitDefs.map(orb => {

          let newOrbDef = objectAssign({}, orb);
          if(newOrbDef.orbitDefId === action.orbitDef.orbitDefId){
            newOrbDef[action.orbitDefPropertyName] = action.orbitDefPropertyValue;
          }
          return newOrbDef;

        })
      };

      return newState;

    default:
      return state;
  }

}
