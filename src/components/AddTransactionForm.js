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

  this.props.addTransaction(this.state)

  

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
