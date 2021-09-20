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
  <form id="add-to-cart-form"
    onSubmit={props.handlecartsubmit}>
    <div id="cart-selectors">
      <label>Size:
        <select className="selector" id="size-selector" name="sizesku" onChange={props.handlesizeselect}>
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
        <select className="selector" id="quantity-selector" name="quantity" value={props.selectedquantity} onChange={props.handlequantityselect}>
          {props.selectedsize
            ? quantities.map((quantity, index) => (
              <option value={quantity} key={index}>{quantity}</option>
            ))
            : <option>-</option>
            }
        </select>
      </label>
    </div>
    <div id="cart-buttons">
      {props.selectedsize
        ? props.selectedsize.quantity === 0
          ? <span><em>Item out of stock in this style and size.</em></span>
          : <input id="add-to-cart-button" type="submit" value="Add to Cart"></input>
        : <button id="add-to-cart-button" value="Add to Cart" onClick={props.opensizeselect}>Add to Cart</button>
      }
      {/* <button>Star</button> */}
    </div>
  </form>
  );
};

export default AddToCart;

// {props.selectedsize
//   ? props.selectedsize.quantity === 0
//     ? <span><em>Item out of stock in this style and size.</em></span>
//     : <input id="add-to-cart-button" type="submit" value="Add to Cart"></input>
//   : <button id="add-to-cart-button" value="Add to Cart" onClick={props.opensizeselect}>Add to Cart</button>
// }

// {props.selectedsize.quantity === 0
//   ? <span><em>Item out of stock in this style and size.</em></span>
//   : <input id="add-to-cart-button" type="submit" value="Add to Cart"></input>
// }