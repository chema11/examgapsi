import React from "react";
import axios from 'axios';
import Swal from "sweetalert2/dist/sweetalert2.js";
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
 Swal.fire({
   position: "center",
   icon: "error",
   title: "",
   showConfirmButton: false,
   timer: 5000,
   background: "#ff4444",
   customClass: {
     title: "title",
     icon: "icon"
   }
 });
      });

    }
    RenderWelcomePage(){
    return
      <h3>{this.state.visitor.welcome}</h3>
            
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
                {/* {this.RenderWelcomePage()} */}
          
          </div>
        );
    }
}
export default (WelcomePage);