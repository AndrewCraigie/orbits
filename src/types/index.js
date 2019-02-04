// Centralized propType definitions
import { shape, number, bool, string, oneOfType } from 'prop-types';

export const orbitDef = shape({
  orbitDefId: oneOfType([number,string]),
  n: oneOfType([number,string]),
  cX: oneOfType([number,string]),
  cY: oneOfType([number,string]),
  r: oneOfType([number,string]),
  phase: oneOfType([number,string]),
  a: oneOfType([number,string]),
  b: oneOfType([number,string]),
  fX: oneOfType([number,string]),
  fY: oneOfType([number,string]),
  endX: oneOfType([number,string]),
  endY: oneOfType([number,string]),
  isValid: bool
});

// export const fuelSavings = shape({
//   newMpg: oneOfType([number,string]),
//   tradeMpg: oneOfType([number,string]),
//   newPpg: oneOfType([number,string]),
//   tradePpg: oneOfType([number,string]),
//   milesDriven: oneOfType([number,string]),
//   milesDrivenTimeframe: string,
//   displayResult: bool,
//   dateModified: string,
//   necessaryDataIsProvidedToCalculateSavings: bool,
//   savings: savings
// });
//
// export const savings = shape({
//   monthly: oneOfType([number,string]),
//   annual: oneOfType([number,string]),
//   threeYear: oneOfType([number,string]),
// });
