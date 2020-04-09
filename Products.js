import React from 'react';
import ProductListing from './ProductListing';

class Products extends React.Component {
  state = {
    products: []
  };
  constructor(props) {
    this.name = props.name;
  }

  componentWillMount() { 
    fetch(`https://my-json-server.typicode.com/rr-njvl/jsondata/products`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          products: data
        })
      )
      .catch(error => { alert("Service Error")});
  }

  render() {
    return (
      <div className="users">
        <div>
          <h2>{this.name}</h2>
          <p>Display all the users in table format from external JSON service using FETCH()</p>
        </div>
        <table id="mobiles">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Cost (Rupees)</th>
          </tr>
          {this.state.products.map(prod => (
            <ProductListing product={prod} />  
          ))}
        </table>
      </div>
    );
  }
}

export default Products;