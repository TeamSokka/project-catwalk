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



/*
{
  "product_id": "40348",
    "ratings": {
    "3": "1",
      "4": "1"
  },
  "recommended": {
    "true": "2"
  },
  "characteristics": {
    "Size": {
      "id": 135232,
        "value": "4.0000000000000000"
    },
    "Width": {
      "id": 135233,
        "value": "3.5000000000000000"
    },
    "Comfort": {
      "id": 135234,
        "value": "4.0000000000000000"
    },
    "Quality": {
      "id": 135235,
        "value": "3.5000000000000000"
    }
  }
}
*/
