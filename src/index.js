import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
// import { HashRouter } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"


//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
  	<Router basename={process.env.PUBLIC_URL}>
    	<TodoContainer />
	</Router>
  </React.StrictMode>,
  document.getElementById("root")
);