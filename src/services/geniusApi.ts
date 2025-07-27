import { SongHit } from '../types/genius';

const API_URL = 'https://api.genius.com';

const ACCESS_TOKEN = process.env.REACT_APP_GENIUS_ACCESS_TOKEN;

interface ApiResponse {
  response: {
    hits: SongHit[];
  };
}

export const searchSongs = async (query: string): Promise<SongHit[]> => {
  if (!ACCESS_TOKEN) {
    throw new Error('Genius Access Token is missing. Check your .env file and restart the server.');
  }

  const response = await fetch(`https://api.genius.com/search?q=${encodeURIComponent(query)}&access_token=${ACCESS_TOKEN}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch songs from Genius API. Status: ${response.status}`);
  }

  try {
    const data: ApiResponse = await response.json();
    return data.response.hits;
  } catch (error) {
    const rawText = await response.text();
    console.error("Failed to parse JSON. Raw server response:", rawText);
    throw new Error("The server returned an unexpected response that was not valid JSON. Check the console for details.");
  }
};