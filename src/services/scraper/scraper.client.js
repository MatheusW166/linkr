/* eslint-disable no-param-reassign */
import axios from 'axios';

const scraperClient = axios.create({
  baseURL: process.env.REACT_APP_SCRAPER_PROXY_API_URL,
});

export default scraperClient;
