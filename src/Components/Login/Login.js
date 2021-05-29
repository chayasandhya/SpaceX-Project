import React, { useState, useEffect } from "react";
//Redux --------------------------------------------------------------------------------
import { connect } from "react-redux";
import { loginAction, guestLoginAction } from "../../Redux/Action/UserAction";
//routing -----------------------------------------------------------------------------
import { useHistory } from "react-router-dom";
//CSS -----------------------------------------------------------------------------------
import "./Login.css";

function Login({ loginAction, guestLoginAction, isLogin }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    pageChange();
  }, [isLogin]);

  function pageChange() {
    if (isLogin) {
      history.push("/info");
    }
  }

  return (
    <div className="login_page_container">
      <div className="login_modal">
        <h2>User</h2>
        <input
          className="login_input"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <h2>Password</h2>
        <input
          className="login_input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex_row_around" style={{ width: "15em" }}>
          <button
            className="login_btn"
            onClick={() => loginAction({ username, password })}
          >
            Login
          </button>
          <button className="login_btn" onClick={guestLoginAction}>
            Be a Guest
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isLogin: state.UserReducer.isLogin };
};

export default connect(mapStateToProps, { loginAction, guestLoginAction })(
  Login
);
