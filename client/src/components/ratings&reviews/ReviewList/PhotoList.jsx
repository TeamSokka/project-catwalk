import React from 'react';
import PhotoEntry from './PhotoEntry';
import '../Styles/photo-entry.scss'
class PhotoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="img-container">
          {this.props.photos.map((photo) => (
            <PhotoEntry photo={photo} key={photo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoList;
