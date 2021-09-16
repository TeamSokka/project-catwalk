import React from 'react';

class ProductPreviewImages extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {selectedStyle} = this.props;
    // const image = formatPreviewImage(selectedStyle)
    console.log('selectedStyle: ', selectedStyle);
    return (
      <div id="product-preview-img">
        {/* <img src={selectedStyle.photos[0]} alt="" /> */}
      </div>
    )
  }
}

export default ProductPreviewImages;

//this will default to show
// when clicked ProductInformation will show