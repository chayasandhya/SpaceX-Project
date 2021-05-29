import { INFO, PAGE } from "../../Constants";
const initialState = {
  page: INFO,
};

export function DashboardReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE: {
      return { ...state, page: action.payload };
    }
    default: {
      return state;
    }
  }
}
