import React, {Component} from "react";
// import axios from "axios";

// const Transaction = () => {
//   return (
//     <tr>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//     </tr>
//   );
// };

// export default Transaction;

export default class Transaction extends Component{

  
  state ={
    transactions: [],
    searchBar: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data
      })
     
    })
  }


  render(){
    const { transactions } = this.state
    return (
      <tr>
        <td>{transactions.map(transaction => <tr><td key={transaction.id}>{transaction.date}</td></tr>)}</td>
        <td>{transactions.map(transaction => <tr><td key={transaction.id}>{transaction.description}</td></tr>)}</td>
        <td>{transactions.map(transaction => <tr><td key={transaction.id}>{transaction.category}</td></tr>)}</td>
        <td>{transactions.map(transaction => <tr><td key={transaction.id}>{transaction.amount}</td></tr>)}</td>
      </tr>
    )
  }
}

