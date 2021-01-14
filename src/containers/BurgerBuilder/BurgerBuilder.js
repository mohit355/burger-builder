import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxillary";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <BurgerControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
