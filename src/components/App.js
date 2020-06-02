import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube from "./apis/youtube";
const KEY = "AIzaSyDMt-U7vxsZzaejeyOV4xSPJtIaFrXhVg8";

export default class App extends React.Component {
  state = {
    vidoes: [],
    selectedVideo: null
  };
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 25,
        key: KEY
      }
    });
    this.setState({
      vidoes: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                vidoes={this.state.vidoes}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
