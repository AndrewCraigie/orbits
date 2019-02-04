import * as types from '../constants/actionTypes';
import AppSettingsApi from '../api/appSettingsApi';


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
