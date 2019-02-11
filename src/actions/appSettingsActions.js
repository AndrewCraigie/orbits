import * as types from '../constants/actionTypes';
import AppSettingsApi from '../api/appSettingsApi';
import {calculateOrbits} from "../models/OrbitsCalculator";


export function loadAppSettingsSuccess(appSettings){
  return {
    type: types.LOAD_APP_SETTINGS_SUCCESS,
    appSettings
  }
}

export function loadAppSettings(){
  return function(dispatch){
    return AppSettingsApi.getAppSettings().then(appSettings => {
      dispatch(loadAppSettingsSuccess(appSettings));
    }).catch(error => {
      console.log(error);
      // TODO create an action that sets state errors for app
      throw(error);
    });
  };
}

export function __stateChange(orbitDefs, appSettings){
  return {
    type: types.STATE_CHANGE,
    orbitDefs,
    appSettings
  }
}


export function timeChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate time input is number

    let newAppSettings = Object.assign({}, state.appSettings, {currentT: value});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.oribtDefs, calculatedState.appSettings));

  };
}


export function onIntervalChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate interval input is number

    let newAppSettings = Object.assign({}, state.appSettings, {interval: value});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.oribtDefs, calculatedState.appSettings));

  };
}

export function cXChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate cX input is number
    let cXValue = parseFloat(value);

    let newAppSettings = Object.assign({}, state.appSettings, {cX: cXValue});
    console.log("cXChange", newAppSettings);
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.oribtDefs, calculatedState.appSettings));

  };
}

export function cYChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate cY input is number

    let cYValue = parseFloat(value);

    let newAppSettings = Object.assign({}, state.appSettings, {cY: cYValue});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.oribtDefs, calculatedState.appSettings));

  };
}

