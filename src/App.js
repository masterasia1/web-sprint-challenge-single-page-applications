import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import IngredientsForm from "./Components/IngredientsForm"
import Home from "./Components/Home"
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Click here to get some pizza!</p>
      <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza">Pizza</Link>
        </li>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/pizza" component={IngredientsForm}/>

      </Router>
    </>
  );
};
export default App;
