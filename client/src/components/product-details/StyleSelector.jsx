import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

//StyleSelector

var StyleSelector = (props) => (
  <div>
    <div>Available Styles:</div>
    <div id="style-selector">
      {props.styles.length
        ? props.styles.map((style, index) => (
          <div className="style-option" key={index}>
            <span>{style.name}</span>
            <div className="thumbnail-box">
              <img className="style thumbnail" id={props.styles.indexOf(props.selectedStyle) === index ? "selected-style" : ""} data-index={index} src={style.photos[0].thumbnail_url} onClick={props.handleStyleSelect}></img>
              {props.styles.indexOf(props.selectedStyle) === index && <FaRegCheckCircle className="check"/>}
            </div>
          </div>
          ))
        : <p><em>No styles to display.</em></p>
      }
    </div>
  </div>
);

export default StyleSelector;