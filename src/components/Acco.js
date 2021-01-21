import React from "react";
import Acco from "./Acco";

const Acco =()=> {
  fetch('http://localhost:6001/transactions')
  .then(res => res.json())
  .then(data => {
    this.setState({
      transactions: data
    })
   
  })
}


export default Acco;
