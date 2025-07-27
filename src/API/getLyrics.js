const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (request, response) => {
  const { url } = request.query;

  if (!url) {
    return response.status(400).json({ error: 'Genius URL is required.' });
  }

  try {
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    };

    const { data: html } = await axios.get(url, { headers });

    const $ = cheerio.load(html);

    const lyricsContainer = $('div[data-lyrics-container="true"]');
    lyricsContainer.find('br').replaceWith('\n');
    const lyrics = lyricsContainer.text().trim();

    if (lyrics) {
      return response.status(200).json({ lyrics });
    } else {
      return response.status(404).json({ error: 'Could not find lyrics on the page.' });
    }
  } catch (error) {
    console.error('Scraping Error:', error);
    return response.status(500).json({ error: 'Failed to scrape the Genius page.' });
  }
};
