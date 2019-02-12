import delay from './delay';
import ShortId from 'shortid';

const orbitDefs = [
  {
    orbitDefId: "threeid",
    n: "1",
    cX: "0",
    cY: "0",
    r: "80",
    phase: "0",
    a: "1",
    b: "1",
    fX: "r * cos((t * a) + phase)",
    fY: "r * sin((t * a) + phase)",
    endX: "0",
    endY: "0",
    isValid: true,
    orbitColor: "#FF0000",
    orbitStrokeWeight: 1,
    orbitOpacity: 0.5,
    orbitShow: true,
    armColor: "#000000",
    armStrokeWeight: 1,
    armOpacity: 0.5,
    armShow: true,
    curveColor: "#0000FF",
    curveStrokeWeight: 1,
    curveOpacity: 1,
    curveShow: true,
    penSize: 10,
    penShow: true
  },
  {
    orbitDefId: "twoid",
    n: "2",
    cX: "0",
    cY: "0",
    r: "30",
    phase: "0",
    a: "1",
    b: "2",
    fX: "r * cos((t * a) + phase)",
    fY: "r * sin((t * a) + phase)",
    endX: "0",
    endY: "0",
    isValid: true,
    orbitColor: "#FF0000",
    orbitStrokeWeight: 1,
    orbitOpacity: 0.5,
    orbitShow: true,
    armColor: "#00FF00",
    armStrokeWeight: 1,
    armOpacity: 0.5,
    armShow: true,
    curveColor: "#0000FF",
    curveStrokeWeight: 1,
    curveOpacity: 1,
    curveShow: true,
    penSize: 10,
    penShow: true
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
