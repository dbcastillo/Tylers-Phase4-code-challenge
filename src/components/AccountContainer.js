import React, { Component } from "react";
import TransactionsList from "./TransactionsList";

class AccountContainer extends Component {


  render() {
   
    return (
      <div>
        
        {/* <AddTransactionForm /> */}
        <TransactionsList transactions={this.props.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
