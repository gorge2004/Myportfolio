import {ES, EN, LANG_EN, LANG_ES, GET_HERO, APPEAR} from './actions.js';


const initialState = {
 ...EN,

};

export function todoApp(state = initialState, action){
  switch (action.type) {
    case LANG_EN:
        return { ...EN}
      break;
      case LANG_ES:
          return {...ES};
        break;
    case APPEAR:
      return {...state, Appear: {show: !state.Appear.show} };
    default:
      return state;

  }
};
