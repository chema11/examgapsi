import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
      console.log(this.props)
    const classes = makeStyles(theme => ({
      root: {
        "& > *": {
          margin: theme.spacing(1)
        }
      }
    }));

    return (
      <div className={classes.root}>
        <div className="flex">
          <Typography variant="h6" className={classes.title}>
            {this.props.name}
          </Typography>
          <Typography variant="h3" className={classes.title}>
            {this.props.price}
          </Typography>
        </div>
        <Typography variant="body1" className={classes.title}>
          {this.props.description}
        </Typography>
      </div>
    );
  }
}
export default Product;
