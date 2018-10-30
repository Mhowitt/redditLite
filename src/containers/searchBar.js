import React, { Component } from 'react';
import './searchBar.css';

export default class SearchBar extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.setAutoFocus) {
      this.inputRef.focus();
    }
  }

  handleSubmit = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.submitSearch();
    }
  };

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
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}
