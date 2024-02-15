import React from "react";
import "./Users.css";
// import pic from "../Users/download.jpeg";
import { Avatar } from '@mui/material'

const Users = () => {
  return (
    <>
      {/* <div className="user-box">
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
      </div> */}


      {/* ******************* New Code**************** */}

      <div className="user-box">
        <div className="first-section">
          <div className="image-name-section">
            <Avatar/>
            <h2>UserName</h2>
          </div>
          <div className="button-section">
            <button>Follow</button>
            <button>Show More</button>
          </div>
        </div>
        <div className="second-section">
          <div className="column-box">
            <h2>330</h2>
            <h5>Post</h5>
          </div>
          <div className="column-box">
            <h2>600</h2>
            <h5>Followers</h5>
          </div>
          <div className="column-box">
            <h2>20</h2>
            <h5>Followings</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
