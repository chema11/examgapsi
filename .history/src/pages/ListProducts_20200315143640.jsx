import React from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { makeStyles } from "@material-ui/core/styles";
import Products from "../components/Product";
import ReactLoading from "react-loading";
export class ListProducts extends React.Component {
         constructor(props) {
           super(props);
           this.state = {
             products: [],
             loading: true
           };
         }
    componentDidMount() {
        debugger;
           axios
             .get(
               "https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/products?page=2"
             )
             .then(response => {
               this.setState({
                 products: response.data.data.products,
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
        debugger;
        const mostrarlistado = this.state.loading;
        if (mostrarlistado === false) {
            return (
                this.state.products.map(item => (
                    <Products price={item.place} name={item.count} info={item.size} />
                )));
        }
        else
        {
            
            return (
        <ReactLoading
          type={"balls"}
          color={"blue"}
          height={"5%"}
          width={"5%"}
          className={"margin-auto"}
        />
      );
            }
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

           return <>{this.state.loadingthis.renderProducts()}</>; 
         }
       }
export default ListProducts;
