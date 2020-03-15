import React from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
export class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      visitor:[]
        };
    }
    componentDidMount() {
    axios.post("https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/visitors")
        .then(response => {
            this.setState({
              visitor:response.data.data
          })
      })
      .catch(error => {

      });

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
            <h3>{this.state.visitor.welcome.replace(",").}</h3>
            {this.state.visitor.welcome?(<Button label={"Continuar"}></Button>):null}
          </div>
        );
    }
}
export default (WelcomePage);