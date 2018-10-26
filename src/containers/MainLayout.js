import React, { Component } from 'react';
import { apiCall } from '../apiCalls.js';
import PostsList from './PostsList';
import Header from './Header';
import './MainLayout.css';
import SideBar from './SideBar.js';
//setTimeout to be called here?

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null, searchTerm: '', loadMore: false };
  }

  componentDidMount = () => {
    const searchSubReddit =
      this.props.match.params.length > 0
        ? this.props.match.params.redditName
        : 'popular';
    this.renderPosts(searchSubReddit);
  };

  handleSearchTerm = value => {
    this.setState({ ...this.state, searchTerm: value });
  };

  renderPosts = data => {
    apiCall(data).then(newData => {
      let posts = newData;
      this.setState({ posts });
    });
  };
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Header
          onChange={this.handleSearchTerm}
          loadMore={this.state.loadMore}
        />

        <div className="main-layout">
          <div className="flex-column side-content">
            <SideBar />
          </div>
          <div className="flex-column main-content">
            <PostsList
              posts={this.state.posts ? this.state.posts : []}
              page={
                this.props.match.params
                  ? this.props.match.params.redditName
                  : 'Homepage'
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
