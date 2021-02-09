import React from "react";

import "../../Filters.scss";

const Filters = props => {
  return (
    <form onSubmit={props.handleSubmit} className="filter-form">
      <input
        name="type"
        type="text"
        className="filter-search"
        placeholder="Enter Type"
        onChange={props.handleChange}
        defaultValue={props.typeValue}
      />
      <input
        name="name"
        type="text"
        className="filter-search"
        placeholder="Enter Name"
        onChange={props.handleChange}
        defaultValue={props.nameValue}
      />
      <input
      name="dimension"
      type="text"
      className="filter-search"
      placeholder="Enter Dimension"
      onChange={props.handleChange}
      defaultValue={props.dimensionValue}
    />
      <input type="submit" value="Filter" className="filter-submit" />
    </form>
  );
};

export default Filters;
