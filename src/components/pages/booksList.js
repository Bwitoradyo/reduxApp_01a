"use strict";

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {getBooks} from "../../actions/booksActions";

class BooksList extends React.Component{
  
  componentDidMount(){
    this.props.getBooks()
  }	
	
  render(){
    const booksList = this.props.books.map(
      (booksArr) => {
         return(
	   <div key = {booksArr._id}>
	     <h3>{booksArr.title}</h3>
	     <p>{booksArr.description}</p>
	     <h5>{booksArr.price}</h5>
	   </div>		 
	 )
      }		    
    )
    return(
      <div>{booksList}</div>		    
    )
  }
}

const mapStateToProps = (state) => {
  return{
    books: state.books.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
