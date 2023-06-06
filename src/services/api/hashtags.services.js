import client from './api.client';

export default async function retrievePosts(hashtag) {
  const response = await client.get(`/hashtag/${hashtag}`);
  return response.data;
}
