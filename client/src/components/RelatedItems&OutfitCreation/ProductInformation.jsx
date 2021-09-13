import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Product Information</h1>
        <p>Product Category</p>
        <p>Product Name</p>
        <p>Price</p>
        <p>Star Rating</p>
      </div>
    )
  }
}

export default ProductInformation;

//props will have information (api)
//this component will map over all the data
//this information is read only