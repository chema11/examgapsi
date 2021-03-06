import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListProducts from "../pages/ListProducts";
import WelcomePage from "../pages/WelcomePage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
    },
   
}));

export default function ButtonAppBar() {
  const classes = useStyles();

    return (
      <div className="App">
        <div className={classes.root}>
          <AppBar position="static" className="color-gapsi">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                e-Commerce Gapsi
              </Typography>
            </Toolbar>
                </AppBar>
          <WelcomePage></WelcomePage> 
        </div>
      </div>
    );
}
