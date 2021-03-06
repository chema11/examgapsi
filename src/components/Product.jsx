import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
      console.log(this.props)
    const classes = makeStyles(theme => ({
      root: {
        maxWidth: 305
      },
      media: {
        height: 140
        },
      
    }));

    return (
      <Grid item xs={4}>
        <Card item xs={110}>
          <CardActionArea>
            
            <CardMedia className={classes.media} image={this.props.image} />
            <CardContent>
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
              <Grid item xs={10}>
                <Typography variant="body1" className={classes.title}>
                  {this.props.description}
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}
export default Product;
