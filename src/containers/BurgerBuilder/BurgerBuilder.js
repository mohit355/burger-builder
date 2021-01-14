import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxillary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 1.5,
  cheese: 10,
  meat: 1.5,
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
    purchasable: false,
    purchasing: false,
    totlaPrice: 40,
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purchasable: sum > 0,
    });
  }

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

    this.updatePurchaseState(updatedIngredients);
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

    this.updatePurchaseState(updatedIngredients);
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
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.addIngredientsHandler}
          ingredientRemoved={this.removeIngredientsHandler}
          disabled={disabledInfo}
          price={this.state.totlaPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
