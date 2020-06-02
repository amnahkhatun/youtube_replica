import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ vidoes, onVideoSelect }) => {
  const renderedList = vidoes.map(vidoes => {
    return (
      <VideoItem
        key={vidoes.id.videoId}
        vidoes={vidoes}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div>{renderedList}</div>;
};
export default VideoList;
