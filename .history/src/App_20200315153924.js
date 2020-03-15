import React from 'react';
import './App.css';
import Apptop from './components/AppTopBar';
import { Route } from "react-router-dom";
import ListProducts from "../pages/ListProducts";

function App() {

  return (
    <React.Fragment>
      <Route path="/pages" Welcome />
      <Route path="/" component={Apptop} />
      <Route path="/home" component={Apptop} />
    </React.Fragment>
  );
}

export default App;
