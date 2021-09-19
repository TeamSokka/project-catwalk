import React from 'react';
import PhotoMapEntry from './photoMapEntry';

const imgContainer = {
  display: 'flex',
};

class PhotosMap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var values = this.props.photos;
    return (
      <div>
        <div style={imgContainer}>
          {values.map((photo) => (
            <PhotoMapEntry photo={photo} key={photo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotosMap;