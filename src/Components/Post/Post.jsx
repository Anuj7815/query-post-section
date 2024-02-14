import React from 'react';
import { useState } from 'react';
import image from '../Post/query.png'
import { Avatar } from '@mui/material'
import './Post.css';

const Post = () => {
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleImageClick = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };
  return (
    <>
      <div className="container">
        <div className="profile-section">
          <Avatar />
        </div>
        <div className="post-description-section">
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius velit a ducimus provident voluptates dolores delectus, dicta odio, aspernatur facilis quae eos impedit labore pariatur expedita hic dolor ab! Repellendus.</h3>
          <div className="author-name">
            <p>By User</p>
          </div>
          <div className="post-description-section-button">
            <button>Give Solution</button>
          </div>
        </div>
        <div className="post-query-image-section">
          <img src={image} alt="" onClick={handleImageClick} />
        </div>
        {showFullScreen && (
          <div
            className="fullscreen-overlay"
            onClick={handleCloseFullScreen}
          >
            <div className="fullscreen-image">
              <img src={image} alt="Full Screen" />
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </>
  )
}

export default Post