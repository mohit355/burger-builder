import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  SideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className="Content"> {this.props.children} </main>
      </Aux>
    );
  }
}

export default Layout;
