import React from 'react';
import '../Styles/photo-entry.scss'

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }

  render() {
    const { url } = this.props.photo;

    return (
      <div>
        {
          this.state.expand === true
          && (
            <div className="modal" aria-hidden="true" onClick={() => { this.setState({ expand: false }); }}>
              <img src={url} className="expanded-img" />
            </div>
          )
        }
        <img src={url} className="img" onClick={() => { this.setState({ expand: true }); }} />
      </div>
    );
  }
}

export default PhotoEntry;

/*
photos: [{…}]
{id: 1595336, url: "wwww.etc"}
*/