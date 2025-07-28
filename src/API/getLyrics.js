module.exports = async (req, res) => {
  const { songId, artist, title } = req.query;
  
  if (!songId && (!artist || !title)) {
    return res.status(400).json({ 
      error: 'Either songId or both artist and title are required.' 
    });
  }

  try {
    if (songId) {
      const apiResponse = await fetch(`https://api.genius.com/songs/${songId}`, {
        headers: {
          'Authorization': `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
          'User-Agent': 'LyricsApp/1.0'
        }
      });
      
      if (apiResponse.ok) {
        const data = await apiResponse.json();
        const song = data.response.song;
        
        return res.status(200).json({
          success: true,
          song: {
            title: song.title,
            artist: song.primary_artist.name,
            album: song.album?.name,
            release_date: song.release_date_for_display,
            genius_url: song.url,
            message: "Lyrics are available on the Genius website",
            external_url: song.url
          }
        });
      }
    }

    if (artist && title) {
      const searchQuery = `${artist} ${title}`;
      const searchResponse = await fetch(`https://api.genius.com/search?q=${encodeURIComponent(searchQuery)}`, {
        headers: {
          'Authorization': `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
          'User-Agent': 'LyricsApp/1.0'
        }
      });

      if (searchResponse.ok) {
        const searchData = await searchResponse.json();
        const hits = searchData.response.hits;
        
        if (hits.length > 0) {
          const song = hits[0].result;
          return res.status(200).json({
            success: true,
            song: {
              id: song.id,
              title: song.title,
              artist: song.primary_artist.name,
              genius_url: song.url,
              image: song.song_art_image_url,
              message: "Lyrics are available on the Genius website",
              external_url: song.url
            }
          });
        }
      }
    }
    
    if (artist && title) {
      try {
        const lyricsResponse = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
        
        if (lyricsResponse.ok) {
          const lyricsData = await lyricsResponse.json();
          return res.status(200).json({
            success: true,
            lyrics: lyricsData.lyrics,
            source: 'lyrics.ovh',
            song: {
              title,
              artist
            }
          });
        }
      } catch (lyricsError) {
        console.log('Alternative lyrics API failed:', lyricsError.message);
      }
    }

    return res.status(404).json({ 
      error: 'Could not find lyrics for this song',
      suggestion: 'Try visiting the Genius website directly for lyrics'
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch song information',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};