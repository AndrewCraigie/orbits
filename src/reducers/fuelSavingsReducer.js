// import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
// import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
// import objectAssign from 'object-assign';
// import initialState from './initialState';
//
//
// export default function fuelSavingsReducer(state = initialState.fuelSavings, action) {
//   let newState;
//
//   switch (action.type) {
//     case SAVE_FUEL_SAVINGS:
//       // For this example, just simulating a save by changing date modified.
//       // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
//       return objectAssign({}, state, {dateModified: action.dateModified});
//
//     case CALCULATE_FUEL_SAVINGS:
//       newState = objectAssign({}, state);
//       newState[action.fieldName] = action.value;
//       newState.necessaryDataIsProvidedToCalculateSavings = necessaryDataIsProvidedToCalculateSavings(newState);
//       newState.dateModified = action.dateModified;
//
//       if (newState.necessaryDataIsProvidedToCalculateSavings) {
//         newState.savings = calculateSavings(newState);
//       }
//
//       return newState;
//
//     default:
//       return state;
//   }
// }
