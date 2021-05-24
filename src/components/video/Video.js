import React from 'react';

import { AiFillEye } from 'react-icons/ai';

import './_video.scss';


const Video = () => {
  return(
    <div className="video">
      <div className="video__top">
        <img 
          src="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title"> Create App in 5 minutes</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Alex Xizana</p>
      </div>
    </div>
  )
}

export default Video;