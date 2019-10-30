import {es, en, lang_en, lang_es, GET_HERO} from './actions.js';


const initialState = {
 ...en,
};

export function todoApp(state = initialState, action){
  switch (action.type) {
    case lang_en:
        return { ...en}
      break;
      case lang_es:
          return {...es};
        break;
    default:
      return state;

  }
};
