export interface Artist {
  name: string;
}

export interface Song {
  id: number;
  title: string;
  url: string; 
  song_art_image_url: string;
  primary_artist: Artist;
}

export interface SongHit {
  result: Song;
}