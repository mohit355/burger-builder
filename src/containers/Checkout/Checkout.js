import React, { Component } from "react";
import ChecoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  //
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <ChecoutSummary
          checkoutContinued={this.checkoutContinueHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
          ingredients={this.props.ings}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ings: state.ingredients };
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(Checkout);
