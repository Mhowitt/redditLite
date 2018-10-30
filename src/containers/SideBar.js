import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
const subreddits = require('../subreddits.json');

// https://www.reddit.com/subreddits/search.json?q=funny
export default class SideBar extends Component {
  handleClick = e => {
    let searchReddit = e.target.id;
    let newUrl = `subreddit/${searchReddit}`;
    this.props.renderPosts(searchReddit);
    this.props.history.push(`/subreddit/${searchReddit}`);
  };

  render() {
    return (
      <div className="side-bar-container">
        <div>
          <div className="page-title">
            Check out posts from these Subreddits!
          </div>
          <ul className="subreddit-list">
            {subreddits.subreddits.map((sub, idx) => (
              <li key={idx} name={sub.link} className="subreddit-list-item">
                <div
                  id={sub.link}
                  className="subreddit-link"
                  onClick={this.handleClick}
                >
                  {sub.name}
                  <div className="subreddit-underline" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
