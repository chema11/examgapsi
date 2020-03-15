import React from 'React';
import Apptop from "./components/AppTopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListProducts from "./pages/ListProducts";import Home from './pages/Home';
const Routes = () => {
    return (
      <Switch>
        <Route path="/pages" Welcome />
        <Route path="/" component={Apptop} />
        <Route path="/home" component={ListProducts} />
      </Switch>
    ); 

}
export default Routes;
