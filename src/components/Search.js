import React from "react";

// export default class Search extends Component {

//   state={
//     searchTerm: ""
//   }

  
//   handleSubmit = (e) => {
//     e.preventDefault();
  
// console.log(e.target.previousElementSibling.value)

//   }
//   render(){
  
//     return (
//         <div className="ui large fluid icon input">
//           <input
//             type="text"
//             value={this.searchTerm}
//             placeholder={"Search your Recent Transactions"}
//             onChange={this.handleSort}
//           />
//           <i onClick={this.handleSubmit} className="circular search link icon"></i>
//         </div>
//       )
//   }
// }

// const handleSort = (e) => {
//   e.preventDefault;

//   console.log(e)
// }

const Search = (props) => {
 
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={props.inputValue}
        placeholder={"Search your Recent Transactions"}
        onChange={(id)=> props.filtering(id)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
