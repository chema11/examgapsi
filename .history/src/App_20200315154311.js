import React from 'react';
import './App.css';
import Apptop from './components/AppTopBar';
import { Route } from "react-router-dom";
import ListProducts from "./pages/ListProducts";

function App() {

  return (
    <React.Fragment>
      <Switch
      <Route path="/pages" Welcome />
      <Route path="/" component={Apptop} />
      <Route path="/home" component={ListProducts} />
    </React.Fragment>
  );
}

export default App;
