import React from "react";

export default class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, animal, breed, media, location } = this.props;

    let photos = [];
    //Condition to pick only proper photos from a messy API array list of photos
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return (
      <div className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </div>
    );
  }
}
