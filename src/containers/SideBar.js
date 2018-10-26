import React, { Component } from 'react';
import './SideBar.css';
const subreddits = require('../subreddits.json');

// https://www.reddit.com/subreddits/search.json?q=funny
export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar-container">
        <div>
          <div className="page-title">
            Check out posts from these Subreddits!
          </div>
          <ul className="subreddit-list">
            {subreddits.subreddits.map((sub, idx) => (
              <li key={idx} className="subreddit-list-item">
                {sub.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
