import * as types from '../constants/actionTypes';
import OrbitsApi from '../api/orbitsApi';


export function __orbitDefInputChange(orbitDefs){
  return {
    type: types.ORBIT_DEF_INPUT_CHANGE,
    orbitDefs
  };
}

export function orbitDefInputChange(
  appSettings,
  orbitDefs,
  orbitDefToUpdate,
  propName,
  value){
  return function(dispatch){


    let newOrbitDefs = orbitDefs.map(orbitDef => {
      if (orbitDef.orbitDefId === orbitDefToUpdate.orbitDefId) {
        let objPart = {};
        objPart[propName] = value;
        return Object.assign({}, orbitDef, objPart);
      }
      return Object.assign({}, orbitDef);
    });

    // TODO recalculate values

    dispatch(__orbitDefInputChange(newOrbitDefs));

  };
}

// ------------------------------------------------------------------
export function __deleteOrbitDef(orbitDefs){
  return {
    type: types.DELETE_ORBITDEF,
    orbitDefs
  };
}

export function deleteOrbitDef(appSettings, orbitDefs, orbitDefToDelete){
  return function(dispatch){

    // Get all orbitDefs
    // Remove the one we want to delete
    // Create orbitDef copies
    let newOrbitDefs = orbitDefs.filter(orbitDef => {
      if (orbitDef.orbitDefId !== orbitDefToDelete.orbitDefId) {
        return Object.assign({}, orbitDef);
      }
    });

    // TODO recalculate values

    // dispatch them
    dispatch(__deleteOrbitDef(newOrbitDefs));

  }
}

// ------------------------------------------------------------------
export function __addOrbitDef(orbitDefs){
  return {
    type: types.ADD_NEW_ORBITDEF,
    orbitDefs
  };
}

export function addOrbitDef(appSettings, orbitDefs){

  return function(dispatch){
    let newOrbitDef = Object.assign({}, appSettings.defaultOrbit);
    newOrbitDef.orbitDefId = OrbitsApi.generateId();

    let newOrbitDefs = [
     ...orbitDefs,
     newOrbitDef
    ];

    // TODO recalculate values

    dispatch(__addOrbitDef(newOrbitDefs));
  }

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
