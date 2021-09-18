import React from 'react';
import '../Styles/character-list-entry.scss';
class CharacteristicsListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { characteristic, characteristicID, handleCharacteristicClick, options } = this.props;
    return (
      <div>
        <div style={{ textAlign: 'center' }} className="container">{`* ${characteristic}`}</div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div className="center-flex">
            <input type="radio" id={`${characteristic}1`} name={characteristicID} value="1"
              onClick={(e) => { handleCharacteristicClick(characteristic, e) }} />
            <label htmlFor="size1" className="description-flex">
              <div>{options['1']}</div>
            </label>
          </div>

          <div className="center-flex">
            <input type="radio" id={`${characteristic}2`} name={characteristicID} value="2"
              onClick={(e) => { handleCharacteristicClick(characteristic, e) }} />
            <label htmlFor="size2" className="description-flex">
              <div>{options['2']}</div>
            </label>
          </div>

          <div className="center-flex">
            <input type="radio" id={`${characteristic}3`} name={characteristicID} value="3"
              onClick={(e) => { handleCharacteristicClick(characteristic, e) }} />
            <label htmlFor="size3" className="description-flex">
              <div>{options['3']}</div>
            </label>
          </div>

          <div className="center-flex">
            <input type="radio" id={`${characteristic}4`} name={characteristicID} value="4"
              onClick={(e) => { handleCharacteristicClick(characteristic, e) }} />
            <label htmlFor="size4" className="description-flex">
              <div>{options['4']}</div>
            </label>
          </div>

          <div className="center-flex">
            <input type="radio" id={`${characteristic}5`} name={characteristicID} value="5"
              onClick={(e) => { handleCharacteristicClick(characteristic, e) }} />
            <label htmlFor="size5" className="description-flex">
              <div>{options['5']}</div>
            </label>
          </div>
        </div>
      </div >
    )
  }
}

export default CharacteristicsListEntry;
