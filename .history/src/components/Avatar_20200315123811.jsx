import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import logo from "../images/logo.png";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          <div
              className="avatar"
        src={logo}
       
      />
    </div>
  );
}
