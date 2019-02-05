import delay from './delay';
import ShortId from 'shortid';

const orbitDefs = [
  {
    orbitDefId: "threeid",
    n: "29",
    cX: "0",
    cY: "0",
    r: "100",
    phase: "0",
    a: "1",
    b: "1",
    fX: "r * Math.cos((t * a) + phase)",
    fY: "r * Math.sin((t * a) + phase)",
    endX: "0",
    endY: "0",
    isValid: true
  },
  {
    orbitDefId: "twoid",
    n: "2",
    cX: "0",
    cY: "0",
    r: "50",
    phase: "0",
    a: "1",
    b: "2",
    fX: "r * Math.cos((t * a) + phase)",
    fY: "r * Math.sin((t * a) + phase)",
    endX: "0",
    endY: "0",
    isValid: true
  }
];

const __generateId = () => {
  return ShortId.generate();
};

class OrbitsApi {

  static getAllOrbitDefs() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], orbitDefs));
    });
  }

  static generateId(){
    return __generateId();
  }

}

export default OrbitsApi;
