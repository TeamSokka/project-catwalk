import React from 'react';
import ThumbnailList from './ThumbnailList.jsx';

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
    {props.photos.length
      ? <img className="main-image" src={props.photos[props.selectedphotoindex].url} width="750">
      </img>
      : <p><em>No photo to display.</em></p>
    }
    <div id="thumbnail-list">
      {props.photos
        ? <ThumbnailList
          topThumbnail={props.topThumbnail}
          photos={props.photos}
          selectedphotoindex={props.selectedphotoindex}
          handleThumbnailClick={props.handleThumbnailClick}
         />
        : <p><em>No photos to display.</em></p>
      }
    </div>
  </div>
);

export default ImageGallery;

// <i class="fas fa-chevron-circle-up"></i>
// <i class="fas fa-chevron-circle-down"></i>
// <i class="fas fa-chevron-circle-left"></i>
// <i class="fas fa-chevron-circle-right"></i>