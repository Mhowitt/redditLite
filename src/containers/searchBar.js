import React, { Component } from 'react';
import './searchBar.css';

export default class SearchBar extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.setAutoFocus) {
      this.inputRef.focus();
    }
  }

  render() {
    return (
      <div className="a-search-box-container ">
        <input
          className="a-search-input"
          type="text"
          value={this.props.value}
          autoFocus
          onChange={e => this.props.onChange(e.target.value)}
          placeholder={`Search Subreddits...`}
          ref={input => {
            this.inputRef = input;
          }}
        />
      </div>
    );
  }
}
