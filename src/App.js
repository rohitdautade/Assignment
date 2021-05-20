import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import UIElement from "./pages/UIElement";
import Widget from "./pages/Widget";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Widget' component={Widget} />
          <Route path='/uilement' component={UIElement} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
