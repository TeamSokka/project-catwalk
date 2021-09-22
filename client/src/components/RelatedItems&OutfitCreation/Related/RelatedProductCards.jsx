import React, { useState } from 'react';
import ProductPreviewImages from './ProductPreviewImages';
import ProductInformation from './ProductInformation';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import '../related-items.scss';

const RelatedProductCards = (props) => {
  const { productInfo, relatedProducts, getProductInfo } = props;

  const products = relatedProducts.map((product, index) =>
    <div className="product-card" key={index}>
      <ProductPreviewImages
        productStyles={product.styles}
      />
      <ProductInformation
        relatedProducts={relatedProducts}
        productInfo={productInfo}
        product={product}
      />
    </div>
  );

  return (
    <div id="related-product-card">
      <VscTriangleLeft />
      {products}
      <VscTriangleRight />
    </div>
  )
}

export default RelatedProductCards;