import React from 'react';

//StyleSelector

var StyleSelector = (props) => (
  <div id="style-selector">
    <div>Available Styles:</div>
    {props.styles.length
      ? props.styles.map((style, index) => (
        <img className="style thumbnail" key={index} data-index={index} src={style.photos[0].thumbnail_url} onClick={props.handleStyleSelect}></img>
        ))
      : <p><em>No styles to display.</em></p>
    }
  </div>
);

export default StyleSelector;