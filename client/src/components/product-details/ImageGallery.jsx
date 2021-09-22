import React from 'react';
import ThumbnailList from './ThumbnailList.jsx';
import { FaChevronCircleRight } from 'react-icons/fa';
import { FaChevronCircleLeft } from 'react-icons/fa';

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
          selectedPhotoIndex={props.selectedPhotoIndex}
          handleThumbnailClick={props.handleThumbnailClick}
          handleUpArrowClick={props.handleUpArrowClick}
          handleDownArrowClick={props.handleDownArrowClick}
         />
        : <p><em>No photos to display.</em></p>
      }
    </div>
    <div className="main-image-box">
    {props.photos.length
      ? <div
          id="main-image"
          src={props.photos[props.selectedPhotoIndex].url}
          style={{
            backgroundImage: `url(${props.photos[props.selectedPhotoIndex].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: '10',
            maxHeight: '700px',
            maxWidth: '700px',
            }}
          // style={{
          //   backgroundImage: `url(${props.photos[props.selectedPhotoIndex].url})`,
          //
          // }}
          onClick={props.handleDefaultImageClick}
          >
        {props.selectedPhotoIndex > 0 && <FaChevronCircleLeft className="gallery-arrow left" onClick={props.handleLeftArrowClick}/>}
      {props.selectedPhotoIndex < props.photos.length - 1 &&
      <FaChevronCircleRight className="gallery-arrow right" onClick={props.handleRightArrowClick}/>}
      </div>
      : <p><em>Getting photos...</em></p>
    }
    </div>
  </div>
);

export default ImageGallery;
