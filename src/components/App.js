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

filtering = () => {

  return this.state.transactions.filter((transactions) => {
    if (this.state.searchBar === '') {
        return transactions
      } else {
        return transactions.description.toLowerCase().includes(this.state.searchBar.toLowerCase())
    }
  })
}

filtered = (e) => {
  this.setState({
    searchBar: e.target.value,
  });
};




  addTransaction = (newTransaction) => {
    
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    }
  
    fetch('http://localhost:6001/transactions', reqObj)
    .then(resp => resp.json())
    .then(theTransaction => this.setState({transactions: [...this.state.transactions, theTransaction]}))
    // .then(transaction => {
    //   this.setState({transactions: [...this.state.transactions, transaction]})
    // })
    // this.setState(prevState => {
    //   {
    //     transactions: [...prevState.transactions, newTransaction]
    //   }
    // })
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment blue inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        
        {/* <Search transactions={this.filtering(filteredArr)}/> */}
        <Search filtered={this.filtered} theSearchBar={this.state.searchBar}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <AccountContainer transactions={this.filtering()} />
      </div>
    );
  }
}

export default App;
