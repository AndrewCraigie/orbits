import { LOAD_APP_SETTINGS_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function appSettingsReducer(state = initialState.appSettings, action){

  switch(action.type){

    case LOAD_APP_SETTINGS_SUCCESS:
      return action.appSettings;

    default:
      return state;

  }

}
