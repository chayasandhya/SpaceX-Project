import { LOGIN } from "../Constants";

const initialState = {
  isPremium: false,
  isLogin: false,
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      if (action.payload.isLogin) {
        if (action.payload.isPremium) {
          return { ...state, isPremium: true, isLogin: true };
        } else {
          return { ...state, isPremium: false, isLogin: true };
        }
      } else {
        return { ...state, isPremium: false, isLogin: false };
      }
    }
    default: {
      return state;
    }
  }
}
