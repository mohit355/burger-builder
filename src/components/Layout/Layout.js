import React from "react";
import Aux from "../../hoc/Auxillary";
import "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      {/* <div>Toolbar,sideDrawer,backdrop</div> */}
      <main className="Content"> {props.children} </main>
    </Aux>
  );
};

export default layout;
