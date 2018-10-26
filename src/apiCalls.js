import axios from 'axios';

// t1_	Comment
// t2_	Account
// t3_	Link
// t4_	Message
// t5_	Subreddit
// t6_	Award

export async function apiCall(searchTerm) {
  const baseUrl = `https://www.reddit.com/r/${searchTerm}/top.json?sort=new?limit=25?`;
  let data = await axios.get(baseUrl);
  let redditPosts = data['data']['data']['children'];

  const redditData = redditPosts.map(post => {
    return {
      author: post.data.author,
      title: post.data.title,
      url: post.data.url,
      subreddit_id: post.data.subreddit_id,
      postType: post.data.post_hint,
      date: {
        created: post.data.created,
        created_utc: post.data.created_utc
      },
      thumbnailInfo: {
        thumbnail: post.data.thumbnail,
        height: post.data.thumbnail_height,
        width: post.data.thumbnail_width
      },
      subredditInfo: {
        subreddit: post.data.subreddit,
        name_prefix: post.data.subreddit_name_prefix,
        subscribers: post.data.subreddit_subscribers
      },
      id: post.data.id,
      edited: post.data.edited,
      is_video: post.data.is_video,
      media: post.data.media,
      num_comments: post.data.num_comments,
      redditLink: post.data.permalink,
      preview: post.data.preview,
      score: post.data.score,
      saved: post.data.saved
    };
  });

  return redditData;
}
