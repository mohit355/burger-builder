import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxillary";

const INGREDIENT_PRICES = {
  salad: 15,
  cheese: 10,
  meat: 15,
  bacon: 5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totlaPrice: 40,
  };

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCount;
    const priceAddation = INGREDIENT_PRICES[type];
    const newPrice = this.state.totlaPrice + priceAddation;

    this.setState({
      totlaPrice: newPrice,
      ingredients: updatedIngredients,
    });
  };

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updateCount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCount;
    const priceReduced = INGREDIENT_PRICES[type];
    const newPrice = this.state.totlaPrice - priceReduced;

    this.setState({
      totlaPrice: newPrice,
      ingredients: updatedIngredients,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <BurgerControls
          ingredientAdded={this.addIngredientsHandler}
          ingredientRemoved={this.removeIngredientsHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
