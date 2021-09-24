import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import { FaChevronCircleLeft } from 'react-icons/fa';

//  Expanded View
//    overlays rest of item detail page (whole window)
//    right and left arrows to choose other images
//    no thumbnails, but icons to represent each other image
//    on hover, mouse becomes "+"
//    clicking zooms 2.5x, mouse becomes "-"
//      no arows or thumbnails
//      image moves according to mouse position
//      clicking again zooms out to standard expanded view

var ExpandedView = (props) => (
  <div id="expanded-image-gallery">
    <div id="dot-list">
      {props.photos.map((photo, index) =>
        // (
        //   <FaRegCircle key={props.photos.indexOf(photo)} data-index={props.photos.indexOf(photo)} onClick={props.handleThumbnailClick} />
        // )
        props.photos.indexOf(photo) === props.selectedPhotoIndex
          ? <FaCircle id="selected-dot" key={props.photos.indexOf(photo)} data-index={props.photos.indexOf(photo)} width="25px" onClick={props.handleThumbnailClick}/>
          : <FaRegCircle id="" key={props.photos.indexOf(photo)} data-index={props.photos.indexOf(photo)} width="25px" onClick={props.handleThumbnailClick} />

      )}
    </div>
    <div className="main-image-box-expanded">
    {props.photos.length
      ? <img
          id="expanded-main-image"
          src={props.photos[props.selectedPhotoIndex].url}
          onClick={props.handleExitExpandedClick}
          // style={{
          //   backgroundImage: `url(${props.photos[props.selectedPhotoIndex].url})`,
          //   backgroundSize: 'fit',
          //   backgroundRepeat: 'no-repeat',
          //   zIndex: '7',
          //   overflow: 'scroll',
          //   }}
          // style={{
          //   backgroundImage: `url(${props.photos[props.selectedPhotoIndex].url})`,
          //
          // }}
          >
            </img>
        : <p><em>Getting photos...</em></p>
      }
      <div width="700px">
        {props.selectedPhotoIndex > 0 && <FaChevronCircleLeft className="gallery-arrow left" onClick={props.handleLeftArrowClick}/>}

        {props.selectedPhotoIndex < props.photos.length - 1 &&
        <FaChevronCircleRight className="gallery-arrow right" onClick={props.handleRightArrowClick}/>}
      </div>
      <button className="exit-expanded" onClick={props.handleExitExpandedClick}>Exit Expanded View</button>
    </div>
  </div>
);

export default ExpandedView;
