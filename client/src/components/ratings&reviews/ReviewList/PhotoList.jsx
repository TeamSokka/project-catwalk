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
    return (
      <div>
        <div style={imgContainer}>
          {this.props.photos.map((photo) => (
            <PhotoEntry photo={photo} key={photo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoList;

/*
photos: [{…}]
{id: 1595336, url: "wwww.etc"}
*/
