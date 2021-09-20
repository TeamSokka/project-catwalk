import React from 'react';
import ThumbnailList from './ThumbnailList.jsx';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

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
  <div id="image-gallery" width="60%" height="700px">
    <div id="thumbnail-list">
      {props.photos
        ? <ThumbnailList
          topThumbnail={props.topThumbnail}
          photos={props.photos}
          selectedphotoindex={props.selectedphotoindex}
          handleThumbnailClick={props.handleThumbnailClick}
          handleUpArrowClick={props.handleUpArrowClick}
          handleDownArrowClick={props.handleDownArrowClick}
         />
        : <p><em>No photos to display.</em></p>
      }
    </div>
    {props.photos.length
      ? <img
          id="main-image"
          src={props.photos[props.selectedphotoindex].url} width="750"
          // style={{
          //   backgroundImage: `url(${props.photos[props.selectedphotoindex].url})`,
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          //   zIndex: '10',
          //   maxHeight: '100%',
          //   maxWidth: '100%'
          // }}
        >
      </img>
      : <p><em>No photo to display.</em></p>
    }
  </div>
);

export default ImageGallery;

// <i class="fas fa-chevron-circle-up"></i>
// <i class="fas fa-chevron-circle-down"></i>
// <i class="fas fa-chevron-circle-left"></i>
// <i class="fas fa-chevron-circle-right"></i>