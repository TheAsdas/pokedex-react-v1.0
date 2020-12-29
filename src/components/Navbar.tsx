import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FilterContent } from "../FilterContent";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  let filter = useContext(FilterContent);

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    filter.setFilter((e.target as any).value);
  };

  const form = (
    <div className="input-group d-flex">
      <label className="input-group-text" htmlFor="inputSearch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </label>
      <FilterContent.Consumer>
        {(filter) => (
          <input
            required
            id="inputSearch"
            type="text"
            name="inputSearch"
            className="form-control"
            autoComplete="off"
            onChangeCapture={handleSearchChange}
            value={filter.filter}
          />
        )}
      </FilterContent.Consumer>
    </div>
  );

  const backButton = (
    <button onClick={() => history.push("/")} className="btn btn-primary mx-4">
      Volver...
    </button>
  );

  return (
    <nav id="nav" className="navbar navbar-dark bg-dark d-flex pl-5 fixed-top">
      {location.pathname === "/" ? form : backButton}
    </nav>
  );
};
