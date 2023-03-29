import React, { useEffect, useState } from "react";
import "./SideCart.css";
import { ToastContainer, toast } from 'react-toastify';

const SideCart = (watchTime) => {
    
    const [displayTime, setDisplayTime] = useState(0)

    useEffect(()=>{
        const displayWatchTime = localStorage.getItem("Watch Time")
        setDisplayTime(displayWatchTime);
    },[watchTime])

    const handleCompleteBTN = () =>{
        toast("Congratulation!!! Successfully you complete another movie.");
    }

  return (
    <div className="card position-sticky mt-5 ">
      <h2>Watch History</h2>
      <h4 className="my-3">total watch time</h4>
      <input className="mb-5" type="text" value={displayTime} disabled />
      <h5 className="mt-3 bg-warning p-2">Take Break</h5>
      <div className="d-flex justify-content-around my-3">
        <button className="w-25 btn-circle m-1 btn btn-outline-success">10</button>
        <button className="w-25 btn-circle m-1 btn btn-outline-warning">15</button>
        <button className="w-25 btn-circle m-1 btn btn-outline-danger">20</button>
      </div>
      <input type="text" value={0} disabled />
      <button onClick={handleCompleteBTN} className="mt-5 btn btn-info w-50 mx-auto">Complete</button>
    </div>
  );
};

export default SideCart;