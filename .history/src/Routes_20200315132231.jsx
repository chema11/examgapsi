import React from 'React';
import { Switch, Route } from 'react-router-dom';
import AppTopBar from './components/AppTopBar';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={AppTopBar}/>>
       </Switch>
   ) 

}
export default Routes;
