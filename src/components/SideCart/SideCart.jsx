import React from "react";
import "./SideCart.css";

const SideCart = () => {
  return (
    <div className="card position-sticky mt-5 ">
      <h2>Watch History</h2>
      <h4 className="my-3">total watch time</h4>
      <input type="text" value={0} disabled />
      <h5 className="mt-3">Add Break time</h5>
      <div className="d-flex justify-content-around my-3">
        <button className="w-25 btn-circle m-1 btn btn-outline-success">15</button>
        <button className="w-25 btn-circle m-1 btn btn-outline-warning">20</button>
        <button className="w-25 btn-circle m-1 btn btn-outline-danger">25</button>
      </div>
      <input type="text" value={0} disabled />
      <button className="mt-5 btn btn-info w-50 mx-auto">Complete</button>
    </div>
  );
};

export default SideCart;