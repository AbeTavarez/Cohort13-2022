import "./App.css";
import productsData from './data/productsData'

import { Component } from "react";

import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";

class App extends Component {

  state = {
    productsData: productsData,
    productName: '',
    productPrice: 0,
    productDescription: ''
  }

  // update the values fromthe inputs
  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // create a new product object
    const newProduct = {
      name: this.state.productName,
      price: this.state.productPrice,
      description: this.state.productDescription
    }
    // set the new values in the state
    this.setState({
      productsData: [newProduct, ...this.state.productsData],
      productName: '',
      productPrice: 0,
      productDescription: ''
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar/>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="productName">Product Name</label>
          <input type="text" value={this.state.productName} onChange={this.handleChange} id="productName"/>
          <br/>
          <label htmlFor="productPrice">Product Price</label>
          <input type="number" value={this.state.productPrice} onChange={this.handleChange} id="productPrice"/>

          <label htmlFor="productDescription">Product Description</label>
          <input type="text" value={this.state.productDescription} onChange={this.handleChange} id="productDescription"/>

          <input type="submit" />
        </form>

        <ProductsList products={this.state.productsData} />
      </div>
    );
  }
}

export default App;
