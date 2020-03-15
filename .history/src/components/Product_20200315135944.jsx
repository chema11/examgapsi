import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
export class Product extends React.Component {
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
export default Product;
