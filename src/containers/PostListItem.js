import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PostListItem.css';

export default class PostListItem extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const { post } = this.props;
    const postInfo = post.data;
    const baseSubUrl = 'https://www.reddit.com/';
    const postLink = baseSubUrl + postInfo.permalink;
    const createdAt = postInfo.created_utc;

    return (
      <div className="post-list-item">
        <div className="upper-half-post">
          <Link to={baseSubUrl + postInfo['subreddit_name_prefixed']}>
            {postInfo['subreddit_name_prefixed']}
          </Link>{' '}
          <span>
            Posted By{' '}
            <Link to={`${baseSubUrl}users/${postInfo.author}`}>{`u/${
              postInfo.author
            }`}</Link>
          </span>
        </div>
        <div className="lower-half-post">
          <p>{postInfo.title}</p>
        </div>
      </div>
    );
  }
}
