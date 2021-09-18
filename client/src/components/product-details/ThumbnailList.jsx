import React from 'react';


var ThumbnailList = (props) => (
    <div id="thumbnail-list">
      {props.topThumbnail > 0 && <i className="fas fa-chevron-circle-up" onClick={props.handleUpArrowClick}>^</i>}
      {props.photos.slice(props.topThumbnail, props.topThumbnail + 7).map((photo, index) => (
          <img className='thumbnail' key={index} data-index={index} src={photo.thumbnail_url} width="100" onClick={props.handleThumbnailClick}></img>
      ))}
      {props.topThumbnail < props.photos.length - 7 && <i class="fas fa-chevron-circle-down" onClick={props.handleDownArrowClick}></i>}
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