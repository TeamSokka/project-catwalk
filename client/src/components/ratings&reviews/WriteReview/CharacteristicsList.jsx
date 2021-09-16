import React from 'react';
import CharacteristicsListEntry from './CharacteristicsListEntry'

class CharacteristicsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CharacteristicsListEntry />
      </div>
    )
  }
}

export default CharacteristicsList;
