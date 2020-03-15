import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
export class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      visitor:""
        };
    }

    render() {
        const classes = makeStyles(theme => ({
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

        return (
            <div className={classes.root}>
                <h3>{}</h3>
                <Button label={"Continuar"}></Button>
            </div>
        );
    }
}
export default (WelcomePage);