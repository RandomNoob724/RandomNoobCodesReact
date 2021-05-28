import React from "react";

const SearchForm = () => {
  return (
    <form action="/blog/search" className="form-inline my-2 my-lg-0">
      <input
        type="text"
        className="form-control mr-sm-2"
        name="inputedSearch"
        placeholder="Search"
        aria-label="Search"
        value=""
      />
      <label htmlFor="dateFrom" className="mr-2 ml-2">
        Posts From Date:
      </label>
      <input type="date" className="form-control" name="dateFrom" />
      <label htmlFor="dateTo" className="mr-2 ml-2">
        Posts To Date:
      </label>
      <input type="date" className="form-control" name="dateTo" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
