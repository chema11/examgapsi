import React from 'react';
import './App.css';
import Apptop from './components/AppTopBar';
import { Route,Switch } from "react-router-dom";
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