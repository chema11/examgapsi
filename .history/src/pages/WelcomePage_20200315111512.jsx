import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
export class WelcomePage extends Component {
  constructor() {
    super();
    this.state = {
      pagination: {
        maxReg: 5,
        page: 1,
        first: 0,
      },
      edition: [],
      filters: {},
      loading: false,
      hideAdded: false,
      allData: [],
      columns: [
        { field: "description", header: "Descripcion" },
        { field: "creationDate", header: "Fecha " },


      ],
      columnsAdded: [
        { field: "description", header: "Descripcion" },
        { field: "creationDate", header: "Fecha " },

      ]
    };
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
