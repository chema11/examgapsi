import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
export class ButtonContinue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const classes = makeStyles(theme => ({
      root: {
        "& > *": {
          margin: theme.spacing(1)
        }
      }
    }));

    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          {this.props.label}
        </Button>
      </div>
    );
  }
}
export default ButtonContinue;