import React, { Component } from "react";

import { getEpisodes } from "../../api/api";

import { Filters } from "./Episodes_Filters";

import { Pagination } from "../Pagination";

import { Loader } from "../Loader";

import "./Episodes.scss";


class Episodes extends Component {
  state = {
    id: "",
    name: "",
    air_date: "",
    episode: "",
    episodes: [],
    created: "",
    url: "",
    page: 1,
    isLoaded: false
  };

  async componentDidMount() {
    const list = await getEpisodes();
    // const slicedListResults = Array.prototype.slice.call(list.results, 0);

    this.setState({
      episodes: list.results,
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
        const list = await this.fetchEpisodes();
        // const slicedListResults = Array.prototype.slice.call(list.results, 0);
        
        this.setState({
          episodes: list.results,
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
        const list = await this.fetchEpisodes();
        // const slicedListResults = Array.prototype.slice.call(list.results, 0);

        this.setState({
          episodes: list.results,
          pages: list.info.pages,
          isLoaded: true
        });
      }
    );
  };

  fetchEpisodes = () =>
    getEpisodes({
      id: this.state.id,
      name: this.state.name,
      air_date: this.state.air_date,
      episode: this.state.episode,
      episodes: () => {
        if (undefined) {
          return null
        } else { 
          return this.state.episode.push()
        } 
      },
      created: this.state.created,
      url: this.state.url,
      page: this.state.page
    });

  render() {
    const {
      isLoaded,
      name,
      episodes,
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
          />
          <div className="episodes episodes-background">
            <table className="episodes-table">
              <thead className="episodes-thead">
                  <tr>
                    <th colSpan="5">Episodes:</th>
                  </tr>
                  <tr>
                    <th>Number:</th>
                    <th>Episode:</th>
                    <th>Name:</th>
                    <th>Air Date:</th>
                  </tr>
              </thead>
              <tbody className="episodes-tbody">   
                {episodes.map(episode => (
                  <tr key={episode.id} id={episode.id}>
                    <td>{episode.id}</td>
                    <td>{episode.episode}</td>
                    <td>{episode.name}</td>
                    <td>{episode.air_date}</td>
                  </tr>
                ),
                console.log(episodes))}
              </tbody>
             </table>
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

export default Episodes;
