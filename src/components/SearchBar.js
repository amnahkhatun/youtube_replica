import React from "react";
import "../style.css";

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
      <div style={{ padding: "3%" }} className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              className=""
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
              placeholder="Type to search videos..."
            />
          </div>
        </form>
      </div>
    );
  }
}
