import * as types from '../constants/actionTypes';
import AppSettingsApi from '../api/appSettingsApi';
import {calculateOrbits} from "../models/OrbitsCalculator";


export function loadAppSettingsSuccess(appSettings, orbitDefs){
  return {
    type: types.LOAD_APP_SETTINGS_SUCCESS,
    appSettings,
    orbitDefs
  }
}

export function loadAppSettings(){
  return function(dispatch){

    return AppSettingsApi.getAppSettings().then(defaultSketch => {

      // Calculate initial state of appSetting and orbitDefs
      let calculatedState = calculateOrbits(defaultSketch.appSettings, defaultSketch.orbitDefs);

      // Dispatch calculated appSetting and orbitDefs
      dispatch(loadAppSettingsSuccess(calculatedState.appSettings, calculatedState.orbitDefs));


    }).catch(error => {
      //console.log(error);
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

export function __incrementTime(orbitDefs, appSettings, curvePoints){
  return{
    type: types.TIME_INCREMENT,
    orbitDefs,
    appSettings,
    curvePoints
  }
}

export function deleteCurve(){
  return {
   type: types.DELETE_CURVE_POINTS,
  }
}

export function iterationsChange(value){
  return function(dispatch, getState){
    const state = getState();

    let newAppSettings = Object.assign({}, state.appSettings, {iterations: value});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.orbitDefs, calculatedState.appSettings));
  };
}

export function incrementTime(){
  return function (dispatch, getState) {

    const state = getState();

    const newT = parseFloat(state.appSettings.currentT) + parseFloat(state.appSettings.interval);

    let newAppSettings = Object.assign({}, state.appSettings, {currentT: newT});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    // Add calculated endX and endY to curvePoints
    let newCurvePoints = [
      ...state.curvePoints,
      [calculatedState.appSettings.endX, calculatedState.appSettings.endY]
    ];

    dispatch(__incrementTime(calculatedState.orbitDefs, calculatedState.appSettings, newCurvePoints));

  };
}

export function timeChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate time input is number

    let newAppSettings = Object.assign({}, state.appSettings, {currentT: value}, {currentIteration: 0});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.orbitDefs, calculatedState.appSettings));

  };
}


export function onIntervalChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate interval input is number

    let newAppSettings = Object.assign({}, state.appSettings, {interval: value});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.orbitDefs, calculatedState.appSettings));

  };
}

export function cXChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate cX input is number
    let cXValue = parseFloat(value);

    let newAppSettings = Object.assign({}, state.appSettings, {cX: cXValue});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.orbitDefs, calculatedState.appSettings));

  };
}

export function cYChange(value){
  return function(dispatch, getState){

    const state = getState();

    // TODO validate cY input is number

    let cYValue = parseFloat(value);

    let newAppSettings = Object.assign({}, state.appSettings, {cY: cYValue});
    let calculatedState = calculateOrbits(newAppSettings, state.orbitDefs);

    dispatch(__stateChange(calculatedState.orbitDefs, calculatedState.appSettings));

  };
}



