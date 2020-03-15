import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
      console.log(this.props)
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1
      }
    }));

    return (
        <Grid item xs={4}>
          <div className="flex">
            <Grid item xs={6}>
              <Typography variant="h6" className={classes.title}>
                {this.props.name}
              </Typography>
            </Grid>

            <Typography variant="h5" className={classes.title}>
              ${this.props.price}
            </Typography>
            </div>
             <Grid item xs={6}></Grid>
          <Typography variant="body1" className={classes.title}>
            {this.props.description}
          </Typography>
        </Grid>
    );
  }
}
export default Product;
