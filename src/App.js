import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Meal from "./Meal";
import Navbar from "./Navbar";
import logo from './logo.svg';
import './App.css';
import FoodSearch from "./FoodSearch";
import Food from "./Food";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} />
          <Route exact path ="/food/:foodName/drink/:drinkName" component={Meal} />
          <Route exact path ="/" render={(routeProps) => <FoodSearch {...routeProps} />} />
          <Route render = {() => <h1>ERROR NOT FOUND</h1>} />          
        </Switch>
      </div>
    );
  }
}

export default App;
