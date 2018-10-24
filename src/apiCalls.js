import axios from 'axios';

export async function apiCall(searchTerm) {
  const baseUrl = `https://www.reddit.com/r/${searchTerm}/top.json?limit=25`;
  let data = await axios.get(baseUrl);
  return { postData: data['data']['data'] };
}
