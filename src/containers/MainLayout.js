import React, { Component } from 'react';
import axios from 'axios';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: null };
  }

  componentDidMount = () => {
    axios
      .get('https://www.reddit.com/r/popular/top.json?limit=25')
      .then(data => data)
      .then(postsData => this.renderPosts(postsData.data));
  };

  renderPosts = data => {
    this.setState({ posts: data });
  };
  render() {
    return <div>Posts</div>;
  }
}

export default MainLayout;
