import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";
import "../stylesheets/App.css";

class App extends Component {

  constructor(){
    super()
    this.state ={
      transactions: [],
      transaction: {},
      isTransactionView: false,
      sortValue: '',
      inputValue: '',
      searchBar: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

// filtering = (e) => {
  
//   // console.log("hey i'm changing", e.target.value)
//   this.setState({
//     inputValue: e.target.value
    
//   })
// }

// filtering = (transactions) => {
// var cop = this.state.transactions.descriptions.map(transaction =><tr>{transaction.description}</tr> )
//   const {search}= this.state;
  
//   if(search ===cop)
//  return console.log(cop)
// }

filtering = this.state.transactions.filter((transactions) => {
  if (searchBar === '') {
       return transactions
     }
       else if (transactions.category.toLowerCase() === searchBar ){
         return transactions
       }
       else if (transactions.amount === searchBar ){
         return transactions
       }
       else
       return transactions.description.toLowerCase().includes(this.state.searchBar)
  }
)

filtered = (e) => {
  this.setState({
    searchBar: e.target.value,
  });
};




  addTransaction = (newTransaction) => {
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, newTransaction]
      }
    })
  }

  render() {
    // const filteredArr = this.state.transactions.filter(transaction => {
    //   return transaction.description.toLowerCase().includes(this.state.inputValue.toLowerCase())
    // })

    // const {descriptions, searchField} = this.state
    // const filtered = descriptions.filter(account => {
    //   account.description.toLowerCase().includes(searchField.toLowerCase())
    // })
    return (
      <div className="ui raised segment">
        <div className="ui segment blue inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        
        {/* <Search transactions={this.filtering(filteredArr)}/> */}
        <Search />
        {<AddTransactionForm addTransaction={this.addTransaction}/>}
        <AccountContainer show={filtering} filter={this.filtered}/>
      </div>
    );
  }
}

export default App;
