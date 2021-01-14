import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary";
const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
