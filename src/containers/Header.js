import React, { Component } from 'react';
import './Header.css';
import SearchBar from './searchBar';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="topChrome-primary">
          {/* <button>Menu</button> */}
          <span className="navbar-brand">RedditLite</span>
          <ul className="pull-right">
            <span className="profile-menu">
              <button>Profile</button>
            </span>
          </ul>
        </nav>
        <div className="topChrome-secondary">
          {' '}
          <SearchBar onChange={this.props.onChange} />
        </div>
        {this.props.loadMore ? (
          <button className="load-button">load more...</button>
        ) : null}
      </div>
    );
  }
}

export default Header;
