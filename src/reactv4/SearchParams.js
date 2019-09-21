import React from "react";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchParams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: []
    };
  }

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleLocationOnFocus = event => {
    if (this.state.location === "Seattle, WA") {
      this.setState({
        location: ""
      });
    }
  };

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value,
        breed: "" //we set breed back to zero to avoid non existing combinations of animals and breeds
      },
      this.getBreeds //Get breeds is guaranteed to flash only after the setState gets an update
    );
  };

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };

  render() {
    const { location, animal, breed } = this.state;
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onFocus={this.handleLocationOnFocus}
            onChange={this.handleLocationChange}
            id="location"
            value={location}
            placeholder="Location"
          ></input>
        </label>
        <label htmlFor="animal">
          Animals
          <select
            onBlur={this.handleAnimalChange}
            onChange={this.handleAnimalChange}
            id="animal"
            value={animal}
            placeholder="Animal"
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breeds
          <select
            onBlur={this.handleBreedChange}
            onChange={this.handleBreedChange}
            id="breed"
            value={breed}
            placeholder="Breed"
            disabled={!breed.length}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default SearchParams;
