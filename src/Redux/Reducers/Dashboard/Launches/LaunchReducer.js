import { LAUNCHES } from "../../../Constants";
const initialState = {
  launches: [],
};

export function LaunchReducer(state = initialState, action) {
  switch (action.type) {
    case LAUNCHES: {
      let copyState = { ...state, launches: action.payload };
      return copyState;
    }
    default: {
      return state;
    }
  }
}
