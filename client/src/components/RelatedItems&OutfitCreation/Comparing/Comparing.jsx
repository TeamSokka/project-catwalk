import React from 'react';
import CurrentProduct from './CurrentProduct';
import ComparedProduct from './ComparedProduct';
import Characteristic from './Characteristic';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscCheck } from'react-icons/vsc';
import './comparing.scss';

const Comparing = (props) => {
  const {productInfo, comparedProduct, exitComparison} = props;

  const productName = productInfo.name;
  const compareName = comparedProduct.name;

  const productFeatures = productInfo.features;
  const featureOne = productFeatures.map(feature => {
    return `${feature.value} ${feature.feature}`;
  });

  const compareFeatures = comparedProduct.features;
  const featureTwo = compareFeatures.map(feature => {
    return `${feature.value} ${feature.feature}`;
  });

  const characteristicList = [...new Set([...featureOne, ...featureTwo])];

  const characteristic = characteristicList.map(feature => {
    return (
      <tr>
        <td id="product-check"><VscCheck /></td>
        <td id="characteristic">{feature}</td>
        <td id="compared-check"><VscCheck /></td>
      </tr>
    )
  })

  return (
    <div id="comparing-container">
      <div id="inner-comparing-container">

        <div id="comparing-map">
          <div id="comparing-label">
            <h2>Comparing</h2>
            <TiDeleteOutline id="close-comparing-modal" onClick={() => exitComparison()}/>
          </div>

          {/* <div id="comparing-info"> */}
          <table>
            <tbody>
              <tr>
                <th id="product-check">{productName}</th>
                <th id="characteristic"></th>
                <th id="compared-check">{compareName}</th>
              </tr>
              {characteristic}
            </tbody>
          </table>
          {/* </div> */}

            {/* <CurrentProduct
               name={productName}
             />
             <Characteristic
                characteristic={characteristic}
             />
             <ComparedProduct
               name={compareName}
             /> */}
        </div>

      </div>
    </div>
  )
}

export default Comparing;