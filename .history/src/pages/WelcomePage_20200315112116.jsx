import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
export class WelcomePage extends React {
    constructor(props) {
        super(props);
        this.state = {
      
        };
    }
    render() {
        const classes = ;

        return (
            <div className={classes.root}>
                <Button label={"Continuar"}></Button>
            </div>
        );
    }
}
export default (WelcomePage);