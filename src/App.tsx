import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Home from './components/Home';
import Navigation from '../src/components/Navigation';
function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
      </Switch>
    </Router>

  );
}

export default App;
