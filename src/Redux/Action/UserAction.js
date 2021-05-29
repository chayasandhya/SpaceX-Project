import { LOGIN } from "../Constants";

export function loginAction(user) {
  return async (dispatch) => {
    try {
      if (user.username == "admin") {
        if (user.password == "Admin@123") {
          let res = await fetch(
            "https://run.mocky.io/v3/fa7e7fb5-5a50-4b13-a8c2-38fad332566a",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: { user },
            }
          );
          let data = await res.json();
          return dispatch({ type: LOGIN, payload: data });
        } else {
          alert("Invalid Credentials");
          return dispatch({
            type: LOGIN,
            payload: { isLogin: false, isPremium: false },
          });
        }
      } else {
        alert("Invalid Credentials");
        return dispatch({
          type: LOGIN,
          payload: { isLogin: false, isPremium: false },
        });
      }
    } catch {
      console.log("error");
    }
  };
}

export function guestLoginAction() {
  return {
    type: LOGIN,
    payload: { isLogin: true, isPremium: false },
  };
}
export function logoutAction() {
  return {
    type: LOGIN,
    payload: { isLogin: false, isPremium: false },
  };
}
