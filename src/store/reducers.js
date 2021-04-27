import { ES, EN, LANG_EN, LANG_ES, APPEAR } from "./actions.js";


const initialState = {
  ...ES
};

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case LANG_EN:
      return { ...EN, Appear: { show: state.Appear.show } };
  
    case LANG_ES:
      
      return { ...ES, Appear: { show: state.Appear.show } };
    case APPEAR:
      return { ...state, Appear: { show: !state.Appear.show } };
    default:
      return state;
  }
}
