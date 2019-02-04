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
  defaultOrbit: {
    orbitDefId: "1",
    n: "1",
    cX: "0",
    cY: "0",
    r: "200",
    phase: "45",
    a: "2",
    b: "3",
    fX: "r * Math.cos((t * a) + phase)",
    fY: "r * Math.sin((t * a) + phase)",
    endX: "0",
    endY: "0",
    isValid: true
  }
}

class AppSettingsApi {

  static getAppSettings(){
    return new Promise((resolve, reject) => {
      resolve(Object.assign({}, appSettings));
    });
  }

}

export default AppSettingsApi;
