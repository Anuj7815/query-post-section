import React from "react";
import "./Users.css";
import pic from "../Users/download.jpeg";


const Users = () => {
  return (
    <>
      <div className="user-box">
        <div className="first-box">
          <img src={pic} alt="" />
          <div className="name">
            <h4>Ram Babu Buri</h4>
            <button>Follow</button>
          </div>
        </div>
        <div className="row-box">
          <div className="box1">
            <h1>12</h1>
            <p>Post</p>
          </div>
          <div className="box1">
            <h1>106</h1>
            <p>Followers</p>
          </div>
          <div className="box1">
            <h1>78</h1>
            <p>Followings</p>
          </div>
        </div>
        <button>Show More</button>
      </div>
    </>
  );
};

export default Users;
