import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../components/Button";

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button label={"Continuar"}></Button>
    </div>
  );
}
