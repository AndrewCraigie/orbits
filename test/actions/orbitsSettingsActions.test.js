import * as ActionTypes from '../../src/constants/actionTypes';
import * as ActionCreators from '../../src/actions/orbitsSettingsActions';

describe('Actions', () => {

  let generateId;

  // let dateModified;
  beforeAll(() => {
    generateId = (defaultId1, defaultId2) => {

      let id = "ZrtV-rx";
      while(id === defaultId1 || id === defaultId2){
        id = "yNe-RVd";
      }
      return "ZrtV-rx"
    }
  });
  afterAll(() => generateId = null);

  const appState = {
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
    },
    orbitDefs: [
      {
        orbitDefId: "oneid",
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
      },
      {
        orbitDefId: "twoid",
        n: "2",
        cX: "0",
        cY: "0",
        r: "100",
        phase: "0",
        a: "1",
        b: "2",
        fX: "r * Math.cos((t * a) + phase)",
        fY: "r * Math.sin((t * a) + phase)",
        endX: "0",
        endY: "0",
        isValid: true
      }
    ]
  };

  // it('should create an action to add a new orbit', () => {
  //   const dispatch = jest.fn();
  //   const expected = {
  //     type: ActionTypes.ADD_NEW_ORBITDEF,
  //     id: "AqwRtx"
  //   };
  //
  //   // we expect this to return a function since it is a thunk
  //   expect(typeof (ActionCreators.saveFuelSavings(appState))).toEqual('function');
  //   // then we simulate calling it with dispatch as the store would do
  //   ActionCreators.saveFuelSavings(appState)(dispatch);
  //   // finally assert that the dispatch was called with our expected action
  //   expect(dispatch).toBeCalledWith(expected);
  // });

  it('should create an action to add a new orbit', () => {

    let id = "ZrtV-rx";
    const actual = ActionCreators.addNewOrbit(appState.defaultId1, appState.defaultId2, generateId);
    const expected = {
      type: ActionTypes.ADD_NEW_ORBITDEF,
      id: id
    };

    expect(actual).toEqual(expected);
  });
});
