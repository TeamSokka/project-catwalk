import React from 'react';
import './comparing.scss';

const CurrentProduct = (props) => {
  const {name} = props;

  return (
    <div id="current-product">
      <h4>{name}</h4>
    </div>
  )
}

export default CurrentProduct;