import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prev) => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drowerToggleClicked={this.SideDrawerToggleHandler} />
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
