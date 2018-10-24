import React, { Component } from 'react';
import { apiCall } from '../apiCalls.js';
import PostsList from './PostsList';
import Header from './Header';
import './MainLayout.css';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null, searchTerm: '' };
  }

  componentDidMount = () => {
    this.renderPosts('popular');
  };

  handleSearchTerm = value => {
    this.setState({ ...this.state, searchTerm: value });
  };

  renderPosts = data => {
    apiCall('popular').then(newData => {
      let posts = newData.postData;
      this.setState({ posts });
    });
  };
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Header onChange={this.handleSearchTerm} />

        <div className="main-layout">
          <div className="flex-column side-content">Column 1</div>
          <div className="flex-column main-content">
            <PostsList
              posts={this.state.posts ? this.state.posts.children : []}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
