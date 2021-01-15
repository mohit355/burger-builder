import React from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <Logo height="50px" />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
