import React from 'react'
import { SongHit } from '../types/genius'

interface SongResultsProps {
    songs: SongHit[];
    onSongSelect: (song: SongHit) => void;
}

export const SongResults = ({ songs, onSongSelect }: SongResultsProps) => {
    if (songs.length === 0) {
        return null;
    }

    return (
        <div className="mt-12 text-left">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {songs.map((hit) => (
                    <div 
                        key={hit.result.id} 
                        onClick={() => onSongSelect(hit)}
                        className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md overflow-hidden cursor-pointer group hover:-translate-y-1 transition-transform"
                    >
                        <img 
                            src={hit.result.song_art_image_url} 
                            alt={hit.result.title} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white truncate group-hover:text-brand-accent">
                                {hit.result.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                {hit.result.primary_artist.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SongResults
