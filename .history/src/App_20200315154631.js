import React from 'react';
import './App.css';
import Apptop from './components/AppTopBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListProducts from "./pages/ListProducts";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/pages" Welcome />
        <Route path="/" component={Apptop} />
        <Route path="/home" component={ListProducts} />
      </Switch>
    </Router>
  );
}

export default App;
