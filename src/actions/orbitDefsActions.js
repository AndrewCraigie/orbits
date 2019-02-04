import * as types from '../constants/actionTypes';
import OrbitsApi from '../api/orbitsApi';


export function orbitDefInputChange(orbitDef, orbitDefPropertyName, orbitDefPropertyValue){
  return {
    type: types.ORBIT_DEF_INPUT_CHANGE,
    orbitDef,
    orbitDefPropertyName,
    orbitDefPropertyValue
  };
}

export function deleteOrbitDef(orbitDef){
  return {
    type: types.DELETE_ORBITDEF,
    orbitDef
  };
}

// ------------------------------------------------------------------
export function addNewOrbit(defaultOrbit){
  return {
    type: types.ADD_NEW_ORBITDEF,
    id: OrbitsApi.generateId(),
    defaultOrbit
  };
}



// ------------------------------------------------------------------
export function loadOrbitDefsSuccess(orbitDefs){
  return {
    type: types.LOAD_ORBIT_DEFS_SUCCESS,
    orbitDefs
  }
}

export function loadOrbitDefs(){
  return function (dispatch){
    return OrbitsApi.getAllOrbitDefs().then(orbitDefs => {
      dispatch(loadOrbitDefsSuccess(orbitDefs));
    }).catch(error => {
      console.log(error);
      // TODO create an action that sets state errors for app
      throw(error);
    });
  }
}
