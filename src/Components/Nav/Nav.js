import React, { useState } from "react";
//Redux --------------------------------------------------------------------------------
import { connect } from "react-redux";
import { openMenu } from "../../Redux/Action/NavAction";
import { logoutAction } from "../../Redux/Action/UserAction";
//material ui ----------------------------------------------------------------------------
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//Component --------------------------------------------------------------------------------
import Menu from "./Menu/Menu";
//CSS -----------------------------------------------------------------------------------
import "./Nav.css";
//routing -----------------------------------------------------------------------------
import { useHistory } from "react-router-dom";

const Nav = ({ menu, openMenu, logoutAction }) => {
  const history = useHistory();

  function changePage(page) {
    if (page == "login") {
      logoutAction();
    }
    history.push(`/${page}`);
  }
  return (
    <div className="nav_container">
      <div style={{ marginLeft: "1em" }}>
        <h2 onClick={() => changePage("info")} className="header">
          Space-X
        </h2>
      </div>
      <div className="nav_tabs">
        <div className="nav_tabs_explore">
          <h3 onClick={openMenu}>
            Explore <small>&#9660;</small>
          </h3>
          {menu && <Menu />}
        </div>
        <h3 onClick={() => changePage("contact")}>Contact</h3>
        <AccountCircleIcon
          fontSize="large"
          onClick={() => changePage("login")}
        />
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return { menu: state.NavReducer.menu };
};

export default connect(mapStateToProp, { openMenu, logoutAction })(Nav);
