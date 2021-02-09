import React, { Component } from "react";

import { getCharacters } from "../../api/api";

import { Filters } from "./Characters_Filters";

import { Character } from "./Character";

import { Pagination } from "../Pagination";

import { Loader } from "../Loader";

import "./Characters.scss";

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      gender: "",
      species: "",
      status: "",
      origins: {name: "", url: ""},
      locations: {name: "", url: ""},
      episode: [],
      characters: [],
      page: 1,
      isLoaded: false,
      closePopup: false
    };
  }

  async componentDidMount() {
    const list = await getCharacters();

    this.setState({
      characters: list.results,
      pages: list.info.pages,
      isLoaded: true
    });
  }

  handlePaginationClick = event => {
    const clickedPageNumber = +event.target.textContent;

    this.setState(
      {
        isLoaded: false,
        page: clickedPageNumber
      },
      async () => {
        const list = await this.fetchCharacters();
        
        this.setState({
          characters: list.results,
          pages: list.info.pages,
          isLoaded: true
        });
      }
    );
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        isLoaded: false,
        page: 1
      },
      async () => {
        const list = await this.fetchCharacters();

        this.setState({
          characters: list.results,
          pages: list.info.pages,
          isLoaded: true
        });
      }
    );
  };

  fetchCharacters = () =>
    getCharacters({
      id: this.state.id,
      name: this.state.name,
      gender: this.state.gender,
      species: this.state.species,
      status: this.state.status,
      origins: {
        name: () => {if (undefined) {
            return null
          } else { 
            return this.state.origin.name
          } 
        },
        url: () => {if (undefined) {
          return null
          } else { 
            return this.state.origin.url
          } 
        }
      },
      locations: {
        name: () => {if (undefined) {
              return null
            } else { 
              return this.state.origin.name
            } 
          },
        url: () => {if (undefined) {
            return null
          } else { 
            return this.state.origin.url
          } 
        }
      },
      episode: () => {if (undefined) {
          return null
        } else { 
          return this.state.episode.push()
        } 
      },
      page: this.state.page
    });

  render() {
    const {
      characters,
      isLoaded,
      name,
      gender,
      species,
      status,
      originName,
      originUrl,
      locationName,
      locationUrl,
      episode,
      page,
      pages
    } = this.state;

    return (
      <div>
        <Loader isLoaded={isLoaded}>
          <Filters
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleInputChange}
            searchValue={name}
            genderValue={gender}
            speciesValue={species}
            statusValue={status}
            originNameValue={originName}
            originUrlValue={originUrl}
            locationNameValue={locationName}
            locationUrlValue={locationUrl}
            episodeValue={episode}
          />
          <div className="characters characters-background">
            {characters.map(character => (
              <Character
                  id={character.id}
                  key={character.id}
                  character={character}
                  imageSrc={character.image}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  status={character.status}
                  originName={character.origin.name}
                  originUrl={character.origin.url}
                  locationName={character.location.name}
                  locationUrl={character.location.url}
                  episode={character.episode}
              />
            ))}
          </div>
          <Pagination
            handleClick={this.handlePaginationClick}
            currentPage={page}
            pages={pages}
          />
        </Loader>
      </div>
    );
  }
}

export default Characters;
