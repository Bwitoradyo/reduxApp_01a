"use strict"

//GET BOOKS
export const getBooks = () => {
  return{
    type:"GET_BOOKS"
  }
}

export const deleteBooks = (_id) => {
  return {
   type: "DELETE_BOOK", 
   payload: _id 
  }
}

export const updateBooks = (book) => {
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}

export const postBooks = (book) =>{
  return{
    type: "POST_BOOKS",
    payload: book
  }
}
