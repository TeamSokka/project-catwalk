import React, { useState } from 'react';
import ProductPreviewImages from './ProductPreviewImages';
import ProductInformation from './ProductInformation';
import './related-items.scss';

const RelatedProductCards = (props) => {
  const { productInfo, relatedProducts, getProductInfo } = props;
  const products = relatedProducts.map((product, index) =>
    <div className="product-card">

      <i className="fa fa-star-o" id="fa-star-o"></i>
      <ProductPreviewImages
        productStyles={product.styles}
        key={index}
      />
      <ProductInformation
        relatedProducts={relatedProducts}
        productInfo={productInfo}
        product={product}
        key={index}
        />
    </div>
  );

  return (
    <div id="related-product-card">
      {products}
    </div>
  )
}

export default RelatedProductCards;

/*
1.4.2 List Behavior
Related product lists will be shown as a list of product cards displayed in a carousel fashion scrolling horizontally.
The number of related products will be finite.  All of the related products should be present in the list.   Due to screen limitations, any product cards that do not fit on screen initially, should appear offscreen in the carousel.  On initial load, the list should be centered such that the first related product is all the way on the left hand side of the screen.

In order to navigate through and view the rest of the list, arrows will appear on the right and left hand edges of the list.  Clicking the left and right arrow will scroll through the list displaying previous and subsequent cards in the list, respectively.  Clicking on the arrow should only scroll through the list one product at a time.

When the first card is all the way on the left of the screen, and no previous cards exist to display, the left arrow should be hidden.  This will be the case on initial page load.   Similarly, when the last card appears on the far right of the list, the right arrow will be hidden.
*/


/*
1.4.3 Related Products List
The first list for related products will be the same for every customer. It will display products which have been associated with the current product by the company.  This list will be determined internally.
User interactions will not change the list.  The related products list will be the same each time the product is loaded.

1.4.3.1.  Action button
The action button on cards within the Related Products list will appear as a star icon.  The button will open a modal window comparing the details of the product of the current page to those of the product that was selected from the list.

1.4.3.2.  Comparison Modal
The comparison modal window will pull up and compare the characteristics present for each product.  The modal should be titled “Comparing”. The characteristics to be compared are the same as those which appear on the Overview module for each product separately.
In the comparison modal, all characteristics for both products will be combined and reconciled against one another.  These characteristics should appear in a table format with the first column representing the product for the current page, the second displaying the characteristic, and the third representing the product to be compared.
Each characteristic should appear on its own line.  These characteristics can either be facts regarding the product or values for which the product has a specific quantity.  If the characteristic has a specific value it should display.  If the characteristic is a fact such that it is ‘true’ for the given product, then the value should display as a check mark.    For any characteristics that do not apply to the product, the value should simply be left blank.
All characteristics should appear in the modal.  If the products have no overlapping characteristics listed, then all should appear, but no single characteristic row would have a value for both products.
If the length of the comparison table is too long to display on the modal, the table should become scrollable.   In this scenario, the product names should remain fixed atop the list.
*/