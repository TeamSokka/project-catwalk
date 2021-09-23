import React from 'react';
import CurrentProduct from './CurrentProduct';
import ComparedProduct from './ComparedProduct';
import Characteristic from './Characteristic';
import { TiDeleteOutline } from 'react-icons/ti';
import './comparing.scss';

const Comparing = (props) => {
  const {productInfo, relatedProducts, exitComparison} = props;

  return (
    <div id="comparing-container">
      <div id="inner-comparing-container">

        <div id="comparing-map">
          <div id="comparing-label">
            <h2>Comparing</h2>
            <TiDeleteOutline id="close-comparing-modal" onClick={() => exitComparison()}/>
          </div>

          <div id="comparing-info">
            <CurrentProduct />
            <Characteristic />
            <ComparedProduct />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Comparing;