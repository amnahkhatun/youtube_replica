import React from "react";
import "./videoItem.css";

const VideoItem = ({ vidoes, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(vidoes)} className="item video-item">
      <img
        className="ui image"
        src={vidoes.snippet.thumbnails.medium.url}
        alt="pic"
      />
      <div className="content">
        <div className="header">{vidoes.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
