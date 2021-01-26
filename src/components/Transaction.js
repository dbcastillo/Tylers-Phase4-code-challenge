import React, { Component } from "react";

class Transaction extends Component {

  render(){
    return (
      <tr>
        <td>{this.props.transactionInfo.date}</td>
        <td>{this.props.transactionInfo.description}</td>
        <td>{this.props.transactionInfo.category}</td>
        <td>{this.props.transactionInfo.amount}</td>
      </tr>
    );
  }
};

export default Transaction;



