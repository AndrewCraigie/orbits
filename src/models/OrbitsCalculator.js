import * as math from 'mathjs'

export function calculateOrbits(appSettings, orbitDefs){

  // If there are no orbit defs
  // May happen on last delete
  if (orbitDefs.length < 1){
    return orbitDefs;
  }

  // Use values in appSettings to calculate
  // the series of orbitDefs endX and endY

  // Create copies of final orbitDefs and return

  let currentT = parseFloat(appSettings.currentT);
  let interval = parseFloat(appSettings.interval);


  let currentIteration = parseInt(appSettings.currentIteration) + 1;

  let t = currentT * interval;

  // Iterate over all obrbitDefs
  // Calculate endX, endY using 'evaluated' functions and variables
  // Keep a track of previously calculated endX, endY

  let prevX = parseFloat(appSettings.cX);
  let prevY = parseFloat(appSettings.cY);
  let endX = prevX;
  let endY = prevY;


  let calculatedOrbitDefs = [];

  for(let i = 0; i < orbitDefs.length; i++) {

    let orbDef = orbitDefs[i];

    let phase = orbDef.phase;
    let n = parseFloat(orbDef.n);
    let r = parseFloat(orbDef.r);
    let phaseRads = parseFloat(phase) * Math.PI / 180;
    let a = parseFloat(orbDef.a);
    let b = parseFloat(orbDef.b);

    const scope = {
      t: t,
      n: n,
      r: r,
      phase: phaseRads,
      a: a,
      b: b,
    };

    endX += math.eval(orbDef.fX, scope);
    endY += math.eval(orbDef.fY, scope);

    let newOrbDef = Object.assign({},
      orbDef,
      {orbitDefId: orbDef.orbitDefId},
      {cX: prevX},
      {cY: prevY},
      {n: n},
      {r: r},
      {phase: phase},
      {a: a},
      {b: b},
      {fX: orbDef.fX},
      {fY: orbDef.fY},
      {endX: endX},
      {endY: endY},
      {isValid: true}
    );

    prevX = endX;
    prevY = endY;

    calculatedOrbitDefs.push(newOrbDef)

  }

  let calculatedAppSettings = Object.assign({}, appSettings, {endX: endX}, {endY: endY}, {currentIteration:currentIteration});

  return {orbitDefs: calculatedOrbitDefs, appSettings: calculatedAppSettings};

}
