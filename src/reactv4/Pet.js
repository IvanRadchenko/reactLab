import React from "react";
<<<<<<< HEAD
import { Link } from "@reach/router";

export default class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];
    //Condition to pick only proper photos from a messy API array list of photos
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
=======

export default class Pet extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.animal}</h2>
        <h2>{this.props.breed}</h2>
      </div>
>>>>>>> Add App for Pet App in reactv4
    );
  }
}
