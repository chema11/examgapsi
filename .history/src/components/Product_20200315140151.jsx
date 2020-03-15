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
            
        <Typography variant="h6" className={classes.title}>
          {this.props.name}
        </Typography>
        <Typography variant="body1" className={classes.title}>
          {this.props.info}
        </Typography>
      </div>
    );
  }
}
export default Product;
