"use strict"
//IMPORT REACT
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import reducers from "./reducers/index";
import {postBooks, updateBooks, deleteBooks} from "./actions/booksActions";
import {addToCart} from "./actions/cartActions";

const middleware = applyMiddleware(logger);


//CREATE STORE
const store = createStore(reducers, middleware);

//IMPORT COMPONENTS
import BooksList from "./components/pages/booksList";
//RENDER THE COMPONENT
render(
  <Provider store = {store}>
    <BooksList /> 
  </Provider>, document.getElementById("app")		
)

