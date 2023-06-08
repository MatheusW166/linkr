import client from './api.client';

export async function searchPosts() {
  const response = await client.get('/posts');
  return response.data;
}

export async function publishPost({ url, description }) {
  const response = await client.post('/posts', { url, description });
  return response.data;
}

export async function getUserFollowers() {
  const response = await client.get('/verify-follow');
  return response.data;
}
