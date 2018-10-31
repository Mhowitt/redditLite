import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compareTimes } from '../helper';
import './PostListItem.css';

export default class PostListItem extends Component {
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
  //render what kind of post it is and the media type
  renderPost = postInfo => {
    if (postInfo.is_video === true) {
      let video = postInfo.media.reddit_video;
      return (
        <video
          src={video.scrubber_media_url}
          controls
          muted
          width={video.width}
          height={video.height}
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      );
    } else if (postInfo.postType === 'image') {
      return (
        <picture>
          {/* <source srcset={} */}
          <img src={postInfo.thumbnailInfo.thumbnail} alt="reddit post" />
        </picture>
      );
    } else if (
      postInfo.preview &&
      postInfo.preview.reddit_video_preview &&
      postInfo.preview.reddit_video_preview.is_gif === 'true'
    ) {
      return (
        <video
          src={postInfo.media.oembed.thumbnail_url}
          height={postInfo.media.oembed.thumbnail_height}
          width={postInfo.media.oembed.thumbnail_width}
          muted
        >
          {' '}
          {postInfo.media.oembed.description}
        </video>
      );
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
            <a
              href={`${baseSubUrl}user/${post.author}`}
              // to={`${baseSubUrl}users/${post.author}`}
            >{`u/${post.author}`}</a>
          </span>
          <span className="posted-date">{this.renderTime()}</span>
        </div>
        <div className="lower-half-post">
          <p>{post.title}</p>
          {this.renderPost(post)}
        </div>
      </div>
    );
  }
}
