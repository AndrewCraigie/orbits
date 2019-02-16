import {
  TIME_INCREMENT,
  DELETE_CURVE_POINTS
} from '../constants/actionTypes';

import initialState from './initialState'

export default function curvePointsReducer(state = initialState.curvePoints, action){

  // TODO handle STATE_CHANGE - should empty curve points

  switch (action.type) {
    case TIME_INCREMENT:
      return action.curvePoints;

    case DELETE_CURVE_POINTS:
      return [];

    default:
      return state


  }


}
