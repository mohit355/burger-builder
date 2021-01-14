import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
  {
    label: "Meat",
    type: "meat",
  },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        {" "}
        Current Price: <strong> {props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          key={ctrl.label}
          label={ctrl.label}
        />
      ))}

      <button className="OrderButton" disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
