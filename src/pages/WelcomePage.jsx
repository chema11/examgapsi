import React from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

import ReactLoading from "react-loading";
export class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitor: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .post(
        "https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/visitors"
      )
      .then(response => {
        this.setState({
          visitor: response.data.data,
          loading: false
        });
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
  RenderWelcomePage() {
    const mostrarlistado = this.state.loading;
    if (mostrarlistado === false) {
      return (
        <>
          <Avatar></Avatar>
          <h3>{this.state.visitor.welcome}</h3>
          <Link to={{ pathname: "/homeproductpm" }}>
            <Button label={"Continuar"}></Button>
          </Link>
        </>
      );
    } else {
      return (
        <ReactLoading
          type={"balls"}
          color={"blue"}
          height={"5%"}
          width={"5%"}
          className={"margin-auto"}
        />
      );
    }
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

    return <div className={classes.root}>{this.RenderWelcomePage()}</div>;
  }
}
export default WelcomePage;
