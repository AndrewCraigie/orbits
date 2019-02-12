import * as math from 'mathjs'

export function validateFunction(fValue, orbitDef){

  const scope = {
    t: 1,
    n: orbitDef.n,
    r: orbitDef.r,
    phase: parseFloat(orbitDef.phase) * Math.PI / 180,
    a: orbitDef.a,
    b: orbitDef.b,
  };

  try{
    let result = math.eval(fValue, scope);
    if(isNaN(result)){
      return false;
    }
    return true;
  } catch(e){
    return false;
  }

}
