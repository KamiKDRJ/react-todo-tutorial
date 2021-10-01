import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import { BrowserRouter } from "react-router-dom"
// import { BrowserRouter as Router } from "react-router-dom"


//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
    	<TodoContainer />
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);