import { MENU} from "../Constants";
const initialState = {
  menu: false,
};

export function NavReducer(state = initialState, action) {
  switch (action.type) {
    case MENU: {
      return { ...state, menu: action.payload };
    }
    default: {
      return state;
    }
  }
}
