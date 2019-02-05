//   plotXOffset: 400,
//   plotYOffset: 300,
//   currentT: 0,
//   interval: 0.04,
//   iterations: 20000,
//   plotScale: 1,

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

  let t = currentT * interval;
  t = 0;

  // Iterate over all obrbitDefs
  // Calculate endX, endY using 'evaluated' functions and variables
  // Keep a track of previously calculated endX, endY

  let prevX = appSettings.cX;
  let prevY = appSettings.cY;
  let endX = 0;
  let endY = 0;


  let calculatedOrbitDefs = [];

  for(let i = 0; i < orbitDefs.length; i++) {

    let orbDef = orbitDefs[i];


    // TODO handle parse errors in some way
    // Possibly have an errors object on each orbitdef
    // or 'flat' errors store in appSettings
    //
    // orbDef.cX = currentX;
    // orbDef.cY = currentY;

    //let calcX = new Function('n', 'radius', 'phase', 'a', 'b', fxReturn);
    // TODO decide which fields are functions

    let phase = orbDef.phase;
    let n = parseFloat(orbDef.n);
    let r = parseFloat(orbDef.r);
    let phaseRads = parseFloat(phase) * Math.PI / 180;
    let a = parseFloat(orbDef.a);
    let b = parseFloat(orbDef.b);

    let fX = orbDef.fX;
    let fY = orbDef.fY;

    let fXReturn = `return ${fX}`;
    let fYReturn = `return ${fY}`;

    let calcX = new Function('n', 'r', 'phase', 'a', 'b', 't', fXReturn);
    let calcY = new Function('n', 'r', 'phase', 'a', 'b', 't', fYReturn);

    endX += calcX(n, r, phaseRads, a, b, t);
    endY += calcY(n, r, phaseRads, a, b, t);

    let newOrbDef = {
      orbitDefId: orbDef.orbitDefId,
      cX: prevX,
      cY: prevY,
      n: n,
      r: r,
      phase: phase,
      a: a,
      b: b,
      fX: orbDef.fX,
      fY: orbDef.fY,
      endX: endX,
      endY: endY,
      isValid: true
    };

    prevX = endX;
    prevY = endY;

    calculatedOrbitDefs.push(newOrbDef)

  }

  return calculatedOrbitDefs;


}
