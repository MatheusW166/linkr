import client from './api.client';

export async function deletePost({ postId }) {
  await client.delete(`/posts/${postId}`);
}

export async function editPost({ postId, url, description }) {
  const res = await client.put(`/posts/${postId}`, { url, description });
  return res.data;
}

export async function repost({ postId }) {
  const res = await client.post(`/posts/${postId}`);
  return res.data;
}
