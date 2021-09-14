import React from 'react';
import ProductDetail from './/product-details/ProductDetail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Hello, World!</div>
        <ProductDetail />
      </div>
    )
  }
}

export default App;