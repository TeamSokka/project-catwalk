import React from 'react';
import './comparing.scss';

const ComparedProduct = (props) => {
  const {name} = props;

  return (
    <div id="compared-product">
      <h4>{name}</h4>
    </div>
  )
}

export default ComparedProduct;