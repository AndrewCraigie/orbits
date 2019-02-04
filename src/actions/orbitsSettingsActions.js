import * as types from '../constants/actionTypes';
import generateId from '../utils/generateId';


// example of a thunk using the redux-thunk middleware
// export function saveFuelSavings(settings) {
//   return function (dispatch) {
//     // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
//     // in this case at this point we could call a service that would persist the fuel savings
//     return dispatch({
//       type: types.SAVE_FUEL_SAVINGS,
//       dateModified: getFormattedDateTime(),
//       settings
//     });
//   };
// }
//
// export function calculateFuelSavings(settings, fieldName, value) {
//   return {
//     type: types.CALCULATE_FUEL_SAVINGS,
//     dateModified: getFormattedDateTime(),
//     settings,
//     fieldName,
//     value
//   };
// }

export function addNewOrbit({ defaultId1, defaultId2 }){
  return {
    type: types.ADD_NEW_ORBITDEF,
    id: generateId([defaultId1, defaultId2])
  };
}

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
