import client from './api.client';

export default async function retrievePosts({ hashtag, limit, offset }) {
  const response = await client.get(
    `/hashtag/${hashtag}?limit=${limit}&offset=${offset}`,
  );
  return response.data;
}
