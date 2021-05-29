import React from "react";
//Redux --------------------------------------------------------------------------------
import { connect } from "react-redux";
import { closeMenu } from "../../../Redux/Action/NavAction";
//routing -----------------------------------------------------------------------------
import { useHistory } from "react-router-dom";
//CSS -----------------------------------------------------------------------------------
import "./Menu.css";

function Menu({ closeMenu }) {
  const menuItems = ["Launches", "Info"];

  const history = useHistory();

  function changePage(item) {
    closeMenu();
    history.push(`/${item.toLowerCase()}`);
  }

  return (
    <div className="menu_container">
      {menuItems.map((item) => {
        return (
          <h4 className="menu_items" onClick={() => changePage(item)}>
            {item}
          </h4>
        );
      })}
    </div>
  );
}

export default connect(null, { closeMenu })(Menu);
