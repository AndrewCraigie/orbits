//import delay from './delay';

const defaultSketchUrl = 'http://a.craigie.co/index.php/api/sketches/1';

//        'title' => 'Sample 1',
//         'description' => 'Simple series',
//         'public' => 'true',
//         'featuredSeries' => 'true',

const appSettings = {
  title: "Default Sketch",
  description: "Simple series",
  public: true,
  featuredSeries: true,
  user_id: 1,
  plotXOffset: 400,
  plotYOffset: 300,
  currentT: 0,
  interval: 0.1,
  iterations: 20000,
  currentIteration: 0,
  plotScale: 1,
  defaultId1: "oneid",
  defaultId2: "twoid",
  cX: 400,
  cY: 400,
  endX: 0,
  endY: 0,
  curveColor: "#0000FF",
  curveStrokeWeight: 1,
  curveOpacity: 1,
  curveShow: true,
  penSize: 10,
  penShow: true,
  defaultOrbitDef: {
    orbitDefId: "1",
    n: "1",
    cX: "0",
    cY: "0",
    r: "20",
    phase: "0",
    a: "1",
    b: "2",
    fX: "r * cos((((2 * n) + 1)  * t) + phase)",
    fY: "r * sin((((2 * n) + 1)  * t) + phase)",
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
};

const defaultOrbits = [
  {
    orbitDefId: "threeid",
    n: "1",
    cX: "0",
    cY: "0",
    r: "20",
    phase: "0",
    a: "1",
    b: "1",
    fX: "r * (4 / PI * ((2 * n) + 1)) * cos((((2 * n) + 1)  * t) + phase)",
    fY: "r * (4 / PI * ((2 * n) + 1)) * sin((((2 * n) + 1)  * t) + phase)",
    endX: "0",
    endY: "0",
    isValid: true,
    orbitColor: "#FF0000",
    orbitStrokeWeight: 1,
    orbitOpacity: 0.7,
    orbitShow: true,
    armColor: "#000000",
    armStrokeWeight: 1,
    armOpacity: 0.7,
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
    r: "1",
    phase: "0",
    a: "1",
    b: "2",
    fX: "r * (4 / PI * ((2 * n) + 1)) * cos((((2 * n) + 1)  * t) + phase)",
    fY: "r * (4 / PI * ((2 * n) + 1)) * sin((((2 * n) + 1)  * t) + phase)",
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
  },
  {
    orbitDefId: "frhnr",
    n: "3",
    cX: "0",
    cY: "0",
    r: "1",
    phase: "0",
    a: "1",
    b: "2",
    fX: "r * (4 / PI * ((2 * n) + 1)) * cos((((2 * n) + 1)  * t) + phase)",
    fY: "r * (4 / PI * ((2 * n) + 1)) * sin((((2 * n) + 1)  * t) + phase)",
    endX: "0",
    endY: "0",
    isValid: true,
    orbitColor: "#FF0000",
    orbitStrokeWeight: 1,
    orbitOpacity: 0.7,
    orbitShow: true,
    armColor: "#00FF00",
    armStrokeWeight: 1,
    armOpacity: 0.7,
    armShow: true,
    curveColor: "#0000FF",
    curveStrokeWeight: 1,
    curveOpacity: 1,
    curveShow: true,
    penSize: 10,
    penShow: true
  },
  {
    orbitDefId: "frv5nr",
    n: "4",
    cX: "0",
    cY: "0",
    r: "5",
    phase: "0",
    a: "1",
    b: "2",
    fX: "r * (4 / PI * ((2 * n) + 1)) * cos((((2 * n) + 1)  * t) + phase)",
    fY: "r * (4 / PI * ((2 * n) + 1)) * sin((((2 * n) + 1)  * t) + phase)",
    endX: "0",
    endY: "0",
    isValid: true,
    orbitColor: "#FF0000",
    orbitStrokeWeight: 1,
    orbitOpacity: 0.7,
    orbitShow: true,
    armColor: "#00FF00",
    armStrokeWeight: 1,
    armOpacity: 0.7,
    armShow: true,
    curveColor: "#0000FF",
    curveStrokeWeight: 1,
    curveOpacity: 1,
    curveShow: true,
    penSize: 10,
    penShow: true
  },
  {
    orbitDefId: "fr67jnr",
    n: "5",
    cX: "0",
    cY: "0",
    r: "1",
    phase: "0",
    a: "1",
    b: "2",
    fX: "r * (4 / PI * ((2 * n) + 1)) * cos((((2 * n) + 1)  * t) + phase)",
    fY: "r * (4 / PI * ((2 * n) + 1)) * sin((((2 * n) + 1)  * t) + phase)",
    endX: "0",
    endY: "0",
    isValid: true,
    orbitColor: "#FF0000",
    orbitStrokeWeight: 1,
    orbitOpacity: 0.7,
    orbitShow: true,
    armColor: "#00FF00",
    armStrokeWeight: 1,
    armOpacity: 0.7,
    armShow: true,
    curveColor: "#0000FF",
    curveStrokeWeight: 1,
    curveOpacity: 1,
    curveShow: true,
    penSize: 10,
    penShow: true
  }
];

class AppSettingsApi {


  static getAppSettings() {


    return new Promise((resolve) => {

      resolve(
        fetch(defaultSketchUrl)

          .then(response => {

            return response.json();

          }).then(sketch => {

            return sketch;

        }).catch(() => {

            //console.log(error);
            return Object.assign({}, {appSettings: appSettings, orbitDefs: defaultOrbits});

        })
      );

      //resolve(Object.assign({}, appSettings));

    });


  }

}

export default AppSettingsApi;
