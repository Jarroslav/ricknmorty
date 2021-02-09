import React from "react";

import "../../Filters.scss";

const Filters = props => {
  return (
    <form onSubmit={props.handleSubmit} className="filter-form">
      <input
        name="name"
        type="text"
        className="filter-search"
        placeholder="Enter name"
        onChange={props.handleChange}
        defaultValue={props.searchValue}
      />
      <select
        name="gender"
        className="filter-select"
        onChange={props.handleChange}
        defaultValue={props.genderValue}
      >
        <option value="" disabled defaultValue>Filter by gender</option>
        <option value="">all</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <select
        name="species"
        className="filter-select"
        onChange={props.handleChange}
        defaultValue={props.speciesValue}
      >
          <option value="" disabled defaultValue>Filter by species</option>
          <option value="">all</option>
        <option value="human">human</option>
        <option value="alien">alien</option>
      </select>
      <select
        name="status"
        className="filter-select"
        onChange={props.handleChange}
        defaultValue={props.statusValue}
      >
          <option value="" disabled defaultValue>Filter by status</option>
          <option value="">all</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
      <input type="submit" value="Filter" className="filter-submit" />
    </form>
  );
};

export default Filters;
