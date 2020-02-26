import {ES, EN, LANG_EN, LANG_ES,  APPEAR} from './actions.js';


const initialState = {
 ...EN,

};

export function todoApp(state = initialState, action){
  switch (action.type) {
    case LANG_EN:
        return { ...EN, Appear: {show: state.Appear.show} }
      break;
      case LANG_ES:
          return {...ES, Appear: {show: state.Appear.show} };
        break;
    case APPEAR:      
      return {...state, Appear: {show: !state.Appear.show} };
      break;
    default:
      return state;

  }
};
