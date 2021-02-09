import React from "react";

import "../../Filters.scss";

const Filters = props => {
  return (
    <form onSubmit={props.handleSubmit} className="filter-form">
      <input
        name="name"
        type="text"
        className="filter-search"
        placeholder="Enter name of episode"
        onChange={props.handleChange}
        defaultValue={props.searchValue}
      />
      <input type="submit" value="Filter" className="filter-submit" />
    </form>
  );
};

export default Filters;
