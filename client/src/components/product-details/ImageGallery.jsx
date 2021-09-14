import React from 'react';

//ImageGallery module
//img urls in props.selectedstyle
//  Default View
//    single main image overlaid by thumbnails
//    first image in array is default main image
//    clicking on any image updates the main image
//    up to 7 thumbnails, scrollable if more
//      also forward & backward arrows on main image
//      thumbnails must scroll with these when hits edge of   list
//  hovering over main image gives magnifying glass to zoom to expanded view
//  Expanded View
//    overlays rest of item detail page (whole window)
//    right and left arrows to choose other images
//    no thumbnails, but icons to represent each other image
//    on hover, mouse becomes "+"
//    clicking zooms 2.5x, mouse becomes "-"
//      no arows or thumbnails
//      image moves according to mouse position
//      clicking again zooms out to standard expanded view

var ImageGallery = (props) => (
  <div id="image-gallery">
    <im className="main-image" src={props.selectedstyle.photos[0].url}>main image
    </im>
      <div>thumbnail 1</div>
      <div>thumbnail 2</div>
      <div>thumbnail 3</div>
      <div>thumbnail 4</div>
      <div>thumbnail 5</div>
      <div>thumbnail 6</div>
      <div>thumbnail 7</div>
  </div>
);

export default ImageGallery;