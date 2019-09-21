import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class Search extends React.Component {
  render() {
    return (
      <Consumer>
        {(
          context // We can use it as context.breed, context.animal (closure over Consumer Context defined in SearchBox JS)
        ) => (
          <div className="search-params">
            <label htmlFor="location">
              Location
              <input
                onFocus={context.handleLocationOnFocus}
                onChange={context.handleLocationChange}
                id="location"
                value={context.location}
                placeholder="Location"
              ></input>
            </label>
            <label htmlFor="animal">
              Animals
              <select
                onBlur={context.handleAnimalChange}
                onChange={context.handleAnimalChange}
                id="animal"
                value={context.animal}
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
                onBlur={context.handleBreedChange}
                onChange={context.handleBreedChange}
                id="breed"
                value={context.breed}
                placeholder="Breed"
                disabled={!context.breed.length}
              >
                <option />
                {context.breeds.map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>
            <button>Submit</button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Search;
