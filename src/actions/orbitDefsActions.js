import * as types from '../constants/actionTypes';
import OrbitsApi from '../api/orbitsApi';
import { calculateOrbits } from '../models/OrbitsCalculator';


export function __orbitDefsChange(orbitDefs, appSettings){
  return {
    type: types.ORBIT_DEFS_CHANGE,
    orbitDefs,
    appSettings
  }
}

export function orbitDefInputChange(
  orbitDefToUpdate,
  propName,
  value){
  return function(dispatch, getState){

    const state = getState();

    let newOrbitDefs = state.orbitDefs.map(orbitDef => {
      if (orbitDef.orbitDefId === orbitDefToUpdate.orbitDefId) {
        let objPart = {};
        objPart[propName] = value;
        return Object.assign({}, orbitDef, objPart);
      }
      return Object.assign({}, orbitDef);
    });


    let calculatedState = calculateOrbits(state.appSettings, newOrbitDefs);

    dispatch(__orbitDefsChange(calculatedState.orbitDefs, calculatedState.appSettings));

  };
}

export function deleteOrbitDef(orbitDefToDelete){
  return function(dispatch, getState){

    const state = getState();

    // TODO decide if n values should be re-calculated to reflect deletion?

    let newOrbitDefs = state.orbitDefs.filter(orbitDef => {
      if (orbitDef.orbitDefId !== orbitDefToDelete.orbitDefId) {
        return Object.assign({}, orbitDef);
      }
    });

    let calculatedState = calculateOrbits(state.appSettings, newOrbitDefs);

    dispatch(__orbitDefsChange(calculatedState.orbitDefs, calculatedState.appSettings));

  }
}

export function addOrbitDef(){
  return function(dispatch, getState){

    const state = getState();

    let newOrbitDef = Object.assign({}, state.orbitDefs[state.orbitDefs.length - 1]);

    // Add a unique id
    newOrbitDef.orbitDefId = OrbitsApi.generateId();

    // Add a 'sensible' n value
    newOrbitDef.n = state.orbitDefs.length + 1;

    let newOrbitDefs = [
     ...state.orbitDefs,
     newOrbitDef
    ];

    let calculatedState = calculateOrbits(state.appSettings, newOrbitDefs);

    dispatch(__orbitDefsChange(calculatedState.orbitDefs, calculatedState.appSettings));
  }
}

// ------------------------------------------------------------------
export function loadOrbitDefsSuccess(orbitDefs, appSettings){
  return {
    type: types.LOAD_ORBIT_DEFS_SUCCESS,
    orbitDefs,
    appSettings
  }
}


export function loadOrbitDefs(){
  return function (dispatch, getState){
    return OrbitsApi.getAllOrbitDefs().then(orbitDefs => {

      const state = getState();

      let calculatedState = calculateOrbits(state.appSettings, orbitDefs);

      dispatch(loadOrbitDefsSuccess(calculatedState.orbitDefs, calculatedState.appSettings));

    }).catch(error => {
      //console.log(error);
      // TODO create an action that sets state errors for app
      throw(error);
    });
  }
}
