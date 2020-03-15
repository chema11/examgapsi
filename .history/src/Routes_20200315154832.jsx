import React from 'React';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
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
