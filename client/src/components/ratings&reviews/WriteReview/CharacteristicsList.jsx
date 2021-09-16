import React from 'react';
import CharacteristicsListEntry from './CharacteristicsListEntry'

class CharacteristicsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const characteristics = [];
    const keys = Object.keys(this.props.metaData.characteristics);
    keys.forEach((characteristic, index) => {
      characteristics.push(
        <CharacteristicsListEntry
          characteristic={characteristic}
          characteristicID={this.props.metaData.characteristics["id"]}
          key={index}
          handleCharacteristicClick={this.props.handleCharacteristicClick}
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
{/* get keys Object.keys */ }
