import React from "react";

const Search = (props) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3 "
      placeholder="Search..."
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Search;
