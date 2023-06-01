import scraperClient from './scraper.client';

const key = process.env.REACT_APP_SCRAPER_PROXY_KEY;

export default async function scrapUrl({ url }) {
  const response = await scraperClient.get(`?api_key=${key}&url=${url}`);
  const html = response.data;

  const description = html
    .match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/i)
    ?.at(1);

  const title = html.match(/<title[^>]*>(.*?)<\/title>/i)?.at(1);

  const icon = html
    .match(/<link[^>]*rel=["']icon["'][^>]*href=["'](.*?)["'][^>]*>/i)
    ?.at(1);

  return { title, description, icon };
}
