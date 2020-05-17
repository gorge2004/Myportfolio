import { ES, EN, LANG_EN, LANG_ES, APPEAR } from "./actions.js";


const initialState = {
  ...ES
};

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case LANG_EN:
      console.log(EN);
      
      return { ...EN, Appear: { show: state.Appear.show } };
      break;
    case LANG_ES:
      console.log(ES);
      
      return { ...ES, Appear: { show: state.Appear.show } };
      break;
    case APPEAR:
      return { ...state, Appear: { show: !state.Appear.show } };
      break;
    default:
      return state;
  }
}
