import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compareTimes } from '../helper';
import './PostListItem.css';

export default class PostListItem extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  renderTime = () => {
    let difference = compareTimes(this.props.post.date.created_utc);
    if (difference < 1) {
      return 'Less than an hour ago';
    } else if (difference === 1) {
      return 'an hour ago';
    } else {
      return `${difference} hours ago`;
    }
  };

  render() {
    const { post } = this.props;

    const baseSubUrl = 'https://www.reddit.com/';
    const postLink = baseSubUrl + post.redditLink;
    const createdAt = post.date.created_utc;

    return (
      <div className="post-list-item">
        <div className="upper-half-post">
          <Link to={baseSubUrl + post.subredditInfo['name_prefixed']}>
            {post.subredditInfo['name_prefixed']}
          </Link>{' '}
          <span>
            Posted By{' '}
            <Link to={`${baseSubUrl}users/${post.author}`}>{`u/${
              post.author
            }`}</Link>
          </span>
          <span className="posted-date">{this.renderTime()}</span>
        </div>
        <div className="lower-half-post">
          <p>{post.title}</p>
        </div>
      </div>
    );
  }
}
