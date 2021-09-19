import React from 'react';
import PhotoEntry from './PhotoEntry';

const imgContainer = {
  display: 'flex',
};

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var values = this.props.photos;
    return (
      <div>
        <div style={imgContainer}>
          {values.map((photo) => (
            <PhotoEntry photo={photo} key={photo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoList;