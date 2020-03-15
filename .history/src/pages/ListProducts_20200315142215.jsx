import React from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { makeStyles } from "@material-ui/core/styles";
import Products from "../components/Product";
import ReactLoading from "react-loading";
export class WelcomePage extends React.Component {
         constructor(props) {
           super(props);
           this.state = {
             products: [],
             loading: true
           };
         }
         componentDidMount() {
           axios
             .get(
               "https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/products?page=2"
             )
             .then(response => {
               debugger;
               this.setState({
                 products: response.data.data,
                 loading: false
               });
             })
             .catch(error => {
               Swal.fire({
                 position: "center",
                 icon: "error",
                 title: "",
                 showConfirmButton: false,
                 timer: 5000,
                 background: "#ff4444",
                 customClass: {
                   title: "title",
                   icon: "icon"
                 }
               });
             });
         }
         renderProducts() {
           this.state.products.map(item => (
             <Products price={item.place} name={item.count} info={item.size} />
           ));
         }
         render() {
           const classes = makeStyles(theme => ({
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

           return {this.renderProducts()}
         }
       }
export default WelcomePage;
