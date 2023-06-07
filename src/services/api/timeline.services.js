import client from './api.client';

export async function searchPosts({ limit = 20, offset = 0 }) {
  const response = await client.get(`/posts?limit=${limit}&offset=${offset}`);
  return response.data;
}

export async function publishPost({ url, description }) {
  const response = await client.post('/posts', { url, description });
  return response.data;
}
