import React from "react";

const Header = () => {
  return (
    <nav className="">
      <div className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand fw-semibold ps-4">Movie-Bazar</a>
        <form className="form-inline d-flex gap-3 px-4">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success my-2 my-sm-0 " type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
