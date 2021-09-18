import React from 'react';
import { formatPreviewImage } from '../helpers/_functions.js'

const ProductPreviewImages = (props) => {
  const {selectedStyle} = props;
  const images = formatPreviewImage(selectedStyle);

  // console.log('image: ', images);
  // console.log('selectedStyle: ', selectedStyle);

  return (
    <div id="product-preview-img">
      {images.map(image => {
        return
          <img
            src={image.thumbnail_url}
            key={image.thumbnail_url}
          />
      })}
    </div>
  )
}

export default ProductPreviewImages

//this will default to show
// when clicked ProductInformation will show