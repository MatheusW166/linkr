import scraperClient from './scraper.client';

export default async function scrapUrl({ url }) {
  const response = await scraperClient.get(`?url=${url}`);
  const metadata = response.data;

  const { description, title, images } = metadata;

  return { title, description, icon: images[0] };
}
