import React, { Component } from "react";

class AddTransactionForm extends Component {


 
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }


handleChange = (e) => {
  const key = e.target.name 
  this.setState({
    [key]: e.target.value
  })
 
}

handleSubmit = (e) => {
  e.preventDefault();

  const newTransaction = {
    date: this.state.date,
    description: this.state.description,
    category: this.state.category,
    amount: this.state.amount
  }


  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify(newTransaction)
  }

  fetch('http://localhost:6001/transactions', reqObj)
  .then(resp => resp.json())
  .then(transaction => {
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })

    this.props.addTransaction(transaction)
  })

}

  render() {

    const {  date, description, category, amount } = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input ref='date' type="date" name="date" value={date} onChange={this.handleChange}/>
            <input ref='description' type="text" name="description" value={description} onChange={this.handleChange} placeholder="Description" />
            <input ref='category' type="text" name="category" value={category} onChange={this.handleChange} placeholder="Category" />
            <input
              ref='amount' type="number"
              name="amount"
              value={amount} 
              onChange={this.handleChange}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
