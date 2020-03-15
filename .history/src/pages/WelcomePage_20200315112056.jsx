import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
export class WelcomePage extends React {
    constructor(props) {
        super(props);
        this.state = {
      
        };
        const useStyles = makeStyles(theme => ({
            root: {
                flexGrow: 1
            },
            menuButton: {
                marginRight: theme.spacing(2)
            },
            title: {
                flexGrow: 1
            }
    
        }));
    }
    render() {
        const classes = useStyles();

        return (
            <div className={classes.root}>
                <Button label={"Continuar"}></Button>
            </div>
        );
    }
}
export default (WelcomePage);