import React, { useState, useEffect } from 'react';
import { SongHit } from '../types/genius';
import { ExternalLink } from 'react-feather';

interface SongLyricsPageProps {
    song: SongHit;
    onBack: () => void;
}

export const SongLyricsPage = ({ song, onBack }: SongLyricsPageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const [error, setError] = useState<string | null>(null);

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
                <button 
                    onClick={onBack} 
                    className="mb-8 font-bold text-brand-accent hover:underline transition-colors duration-200"
                >
                    &larr; Back to Search Results
                </button>
                
                <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img 
                                src={song.result.song_art_image_url} 
                                alt={`${song.result.title} album art`}
                                className="w-full rounded-lg shadow-lg object-cover aspect-square" 
                            />
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                                {song.result.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                                by {song.result.primary_artist.name}
                            </p>
                            
                            <div className="mt-4 p-4 bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-700 rounded-lg flex-grow flex flex-col justify-center">
                                <p className="text-slate-800 dark:text-slate-200 text-center mb-4">
                                    Lyrics for this song are available on the official Genius page.
                                </p>
                                <a 
                                    href={song.result.url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-brand-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold transition-opacity duration-200"
                                >
                                    <ExternalLink size={20} />
                                    View on Genius
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SongLyricsPage;