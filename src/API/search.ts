import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.q as string;
  const accessToken = process.env.REACT_APP_GENIUS_ACCESS_TOKEN;

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  if (!accessToken) {
    return res.status(500).json({ message: 'Genius API token is not configured' });
  }

  try {
    const response = await fetch(`https://api.genius.com/search?q=${encodeURIComponent(query)}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Genius API responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch from Genius API' });
  }
}