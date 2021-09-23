import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscCheck } from'react-icons/vsc';
import './comparing.scss';

const Comparing = (props) => {
  const {productInfo, comparedProduct, exitComparison} = props;

  const productName = productInfo.name;
  const compareName = comparedProduct.name;

  const productFeatures = productInfo.features;
  const featureOne = productFeatures.map(feature => {
    let str = `${feature.value} ${feature.feature}`;
    str = str.split('"').join(' ');
    return str;
  });

  const compareFeatures = comparedProduct.features;
  const featureTwo = compareFeatures.map(feature => {
    let str = (`${feature.value} ${feature.feature}`)
    str = str.split('"').join(' ');
    return str;
  });

  const characteristicList = [...new Set([...featureOne, ...featureTwo])];

  const characteristic = characteristicList.map((feature, index) => {
    return (
      <tr key={index}>
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

        </div>

      </div>
    </div>
  )
}

export default Comparing;