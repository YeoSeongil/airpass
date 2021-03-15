import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Home from './components/Home';
import Navigation from '../src/components/Routers/Navigation';
import Store from './components/Store';
import Login from './components/Login';
import Package from './components/category/Package';
import Recomands from './components/category/Recomands';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/store" exact={true} component={Store}></Route>
        <Route path="/login" exact={true} component={Login}></Route>
        <Route path="/register" exact={true} component={Signup}></Route>
        <Route path="/cart" exact={true} component={Cart}></Route>
        <Route path="/search" exact={true} component={Search}></Route>
        <Route path="/store/package" exact={true} component={Package}></Route>
        <Route path="/store/recomand" exact={true} component={Recomands}></Route>
      </Switch>
    </Router>

  );
}

export default App;
