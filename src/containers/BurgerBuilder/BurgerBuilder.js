import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxillary";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 2,
    },
  };

  render() {
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
