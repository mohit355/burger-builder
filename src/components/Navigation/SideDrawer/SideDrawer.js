import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  return (
    <div className="SideDrawer">
      <div className="logoMargin">
        <Logo height="70px" />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
