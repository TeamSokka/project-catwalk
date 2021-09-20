import React from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { FaChevronCircleUp } from 'react-icons/fa';

var ThumbnailList = (props) => (
    <div id="thumbnail-list">
      {props.topThumbnail > 0 && <FaChevronCircleUp onClick={props.handleUpArrowClick}/>}
      {props.photos.slice(props.topThumbnail, props.topThumbnail + 7).map((photo, index) => (
          <img
          className="thumbnail" id={props.photos.indexOf(photo) === props.selectedphotoindex ? "selected-image" : ""} key={props.photos.indexOf(photo)} data-index={props.photos.indexOf(photo)} src={photo.thumbnail_url} width="100" onClick={props.handleThumbnailClick}></img>
      ))}
      {props.topThumbnail < props.photos.length - 7 && <FaChevronCircleDown onClick={props.handleDownArrowClick}/>}
    </div>
);

export default ThumbnailList;

{/* <div id="thumbnail-list">
{props.photos
  ? props.photos.map((photo, index) => (
    <img className='thumbnail' key={index} data-index={index} src={photo.thumbnail_url} width="100" onClick={props.handleThumbnailClick}></img>
    ))
  : <p><em>No photos to display.</em></p>
}
</div> */}