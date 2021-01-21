import React, { Component } from "react";
import TransactionsList from "./TransactionsList";

class AccountContainer extends Component {


  render() {
   
    return (
      <div>
        
        {/* <AddTransactionForm /> */}
        <TransactionsList/>
      </div>
    );
  }
}

export default AccountContainer;
