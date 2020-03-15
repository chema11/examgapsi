import React from 'react';
import './App.css';
import Apptop from './components/AppTopBar';
import { Route } from "react-router-dom";

function App() {

  return(
  <React.Fragment>
    <Route path="/pages" Welcome />
    <Route path="/" component={LoginPage} {...this.props} />
  </React.Fragment>;
}

export default App;
