import React, { Component } from "react";

import { getLocations } from "../../api/api";

import { Filters } from "./Locations_Filters";

import { Pagination } from "../Pagination";

import { Loader } from "../Loader";

import "../Tables.scss";


class Locations extends Component {
  state = {
    id: "",
    name: "",
    type: "",
    dimension: "",
    residents: [],
    locations: [],
    created: "",
    url: "",
    page: 1,
    isLoaded: false
  };

  async componentDidMount() {
    const list = await getLocations();

    this.setState({
      locations: list.results,
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
        const list = await this.fetchLocations();
        
        this.setState({
          locations: list.results,
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
        const list = await this.fetchLocations();

        this.setState({
          locations: list.results,
          pages: list.info.pages,
          isLoaded: true
        });
      }
    );
  };

  fetchLocations = () =>
    getLocations({
      id: this.state.id,
      name: this.state.name,
      type: this.state.type,
      dimension: this.state.dimension,
      url: this.state.url,
      residents: this.state.residents.push(),
      created: this.state.created,
      page: this.state.page
    });

  render() {
    const {
      isLoaded,
      name,
      type,
      dimension,
      locations,
      page,
      pages
    } = this.state;

    return (
      <div>
        <Loader isLoaded={isLoaded}>
          <Filters
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleInputChange}
            nameValue={name}
            typeValue={type}
            dimensionValue={dimension}
          />
          <div className="locations locations-background">
            <table className="locations-table">
              <thead className="locations-thead">
                  <tr>
                    <th colSpan="5">Locations:</th>
                  </tr>
                  <tr>
                    <th>Number:</th>
                    <th>Type:</th>
                    <th>Name:</th>
                    <th>Dimension:</th>
                  </tr>
              </thead>
              <tbody className="locations-tbody">  
                {locations.map(location => (
                  <tr key={location.id} id={location.id}>
                    <td>{location.id}</td>
                    <td>{location.type}</td>
                    <td>{location.name}</td>
                    <td>{location.dimension}</td>
                  </tr>
                ))}
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

export default Locations;
