import ShortId from 'shortid';

export function generateId(defaultId1, defaultId2){

  let id = ShortId.generate();
  while(id === defaultId1 || id === defaultId2){
    id = ShortId.generate();
  }

  return id;

}
