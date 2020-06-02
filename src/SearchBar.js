import React from "react";
import "./styles.css";

export default class SearchBar extends React.Component {
  state = {
    term: ""
  };
  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div style={{ padding: "3%" }} className="search-bar">
        <form onSubmit={this.onFormSubmit} className="">
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <input
              className="input-video"
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
              placeholder="Search videos..."
            />
          </div>
        </form>
      </div>
    );
  }
}
