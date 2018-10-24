import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';
import './PostList.css';

export default class PostsList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const { posts } = this.props;
    return (
      <div className="list-container">
        {posts.map((post, idx) => (
          <PostListItem key={idx} post={post} />
        ))}
      </div>
    );
  }
}
