import React from 'react';

//AddToCart module
//  size selector
//  quantity selector
//  add to cart button

var AddToCart = (props) => {
  const quantities = [];
  if (typeof props.selectedsize === 'object') {
    for (var i = 1; i <= props.selectedsize.quantity && i <= 15; i++) {
      quantities.push(i);
    };
  }

  return (
  <form id="add-to-cart-form">
    <div>
      <label>Size:
        <select id="size-selector" name="size" onChange={props.handlesizeselect}>
          <option value="">Select Size:</option>
          {props.selectedstyle.skus
          ? Object.keys(props.selectedstyle.skus).map((sku, index) => (
              <option key={index} value={sku}>{props.selectedstyle.skus[sku].size}</option>
            ))
          : <option>OUT OF STOCK</option>
          }
        </select>
      </label>
      <label>Quantity:
        <select id="quantity-selector" name="quantity" value={props.selectedquantity} onChange={props.handlequantityselect}>
          {props.selectedsize
            ? quantities.map((quantity, index) => (
              <option value={quantity} key={index}>{quantity}</option>
            ))
            : <option>-</option>
            }
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
