import React from 'react';
import CharacteristicsListEntry from './CharacteristicsListEntry'
import characteristicOptions from './characteristicOptions';

class CharacteristicsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const characteristics = [];

    const keys = Object.keys(this.props.metaData.characteristics);
    keys.forEach((propName, index) => {
      characteristics.push(
        <CharacteristicsListEntry
          characteristic={propName}
          characteristicID={this.props.metaData.characteristics[propName]["id"]}
          key={index}
          handleCharacteristicClick={this.props.handleCharacteristicClick}
          options={characteristicOptions[propName]}
        />)
    })
    return (
      <div>
        {characteristics}
      </div>
    )
  }
}

export default CharacteristicsList;


