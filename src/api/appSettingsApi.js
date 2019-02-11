import delay from './delay';

const appSettings = {
  plotXOffset: 400,
  plotYOffset: 300,
  currentT: 0,
  interval: 0.04,
  iterations: 20000,
  plotScale: 1,
  defaultId1: "oneid",
  defaultId2: "twoid",
  cX: 400,
  cY: 400,
  endX: 0,
  endY: 0,
  defaultOrbitDef: {
    orbitDefId: "1",
    n: "1",
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
    isValid: true,
    orbitColor: "#FF0000",
    orbitStrokeWeight: 1,
    orbitOpacity: 0.5,
    showOrbit: true,
    armColor: "#00FF00",
    armStrokeWeight: 1,
    armOpacity: 0.5,
    showArm: true,
    curveColor: "#0000FF",
    curveStrokeWeight: 1,
    curveOpacity: 1,
    showCurve: true
  }
};

class AppSettingsApi {

  static getAppSettings(){
    return new Promise((resolve, reject) => {
      resolve(Object.assign({}, appSettings));
    });
  }

}

export default AppSettingsApi;
