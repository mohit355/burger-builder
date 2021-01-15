import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary";

const sideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={`SideDrawer ${props.open ? "Open" : "Close"} `}>
        <div className="logoMargin">
          <Logo height="70px" />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
