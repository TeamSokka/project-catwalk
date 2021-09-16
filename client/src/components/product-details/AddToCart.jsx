import React from 'react';

//AddToCart module
//  size selector
//  quantity selector
//  add to cart button

var AddToCart = (props) => {
  // const quantities = [];
  // for (var i = 0; i <= props.selectedsizesku.quantity; i++) {
  //   quantities.push(i);
  // };

  return (
  <form id="add-to-cart-form">
    <div>
      <label>Select Size:
        <select id="size-selector" value={props.selectedsizesku} onChange={props.handlesizeselect}>
          {props.selectedstyle.skus.length
          ? Object.keys(props.selectedstyle.skus).map((sku, index) => (
              <option key={index} value={sku}>{props.selectedstyle.skus[sku].size}</option>
            ))
          : <option>OUT OF STOCK</option>
          }
        </select>
      </label>
      <label>Select Quantity:
        <select id="quantity-selector">
          {}
        </select>
      </label>
    </div>
    <div>
      <button id="add-to-cart-button">Add to Cart</button>
      <button>Star</button>
    </div>
  </form>
  );
};

export default AddToCart;
