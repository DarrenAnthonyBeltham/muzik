import React, { useState, useEffect } from 'react';
import { SongHit } from '../types/genius';

interface SongLyricsPageProps {
    song: SongHit;
    onBack: () => void;
}

export const SongLyricsPage = ({ song, onBack }: SongLyricsPageProps) => {
    const [lyrics, setLyrics] = useState<string>('');
    const [songData, setSongData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [source, setSource] = useState<string>('');

    useEffect(() => {
        const fetchLyrics = async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                const attempts = [
                    () => fetch(`/api/getLyrics?songId=${song.result.id}`),
                    () => fetch(`/api/getLyrics?artist=${encodeURIComponent(song.result.primary_artist.name)}&title=${encodeURIComponent(song.result.title)}`)
                ];

                for (const attempt of attempts) {
                    try {
                        const response = await attempt();
                        const data = await response.json();
                        
                        if (response.ok && data.success) {
                            if (data.lyrics) {
                                setLyrics(data.lyrics);
                                setSource(data.source || 'external');
                            }
                            if (data.song) {
                                setSongData(data.song);
                            }
                            setIsLoading(false);
                            return; 
                        }
                    } catch (attemptError) {
                        console.log('Attempt failed:', attemptError);
                        continue; 
                    }
                }

                setSongData({
                    title: song.result.title,
                    artist: song.result.primary_artist.name,
                    genius_url: song.result.url,
                    message: "Lyrics are available on the Genius website"
                });
                setError('Lyrics could not be automatically fetched due to website protection.');
                
            } catch (err) {
                console.error('All lyrics fetch attempts failed:', err);
                setError('Unable to fetch lyrics. Please try the direct link to Genius.');
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchLyrics();
    }, [song.result.id, song.result.title, song.result.primary_artist.name]); 

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <button 
                    onClick={onBack} 
                    className="mb-8 font-bold text-brand-accent hover:underline transition-colors duration-200"
                >
                    &larr; Back to Search Results
                </button>
                
                <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3">
                            <img 
                                src={song.result.song_art_image_url} 
                                alt={`${song.result.title} album art`}
                                className="w-full rounded-lg shadow-lg object-cover aspect-square" 
                            />
                        </div>
                        
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                {song.result.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                                by {song.result.primary_artist.name}
                            </p>
                            
                            {songData?.album && (
                                <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">
                                    Album: {songData.album}
                                </p>
                            )}
                            
                            {isLoading && (
                                <div className="flex items-center gap-2 text-slate-500">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-500"></div>
                                    <span>Searching for lyrics...</span>
                                </div>
                            )}
                            
                            {lyrics && !isLoading && (
                                <div className="mt-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                            Lyrics:
                                        </h3>
                                        {source && (
                                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                                Source: {source}
                                            </span>
                                        )}
                                    </div>
                                    <pre className="p-4 rounded-md bg-slate-200 dark:bg-slate-700 whitespace-pre-wrap font-sans text-slate-800 dark:text-slate-200 max-h-96 overflow-y-auto border">
                                        {lyrics}
                                    </pre>
                                </div>
                            )}
                            
                            {(error || (!lyrics && !isLoading)) && (
                                <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-lg">
                                    <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                                        {error || 'Lyrics not available through automatic fetch.'}
                                    </p>
                                    <div className="space-y-2">
                                        <a 
                                            href={song.result.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition-colors duration-200"
                                        >
                                            View on Genius →
                                        </a>
                                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                            Click the link above to view lyrics on the official Genius website.
                                        </p>
                                    </div>
                                </div>
                            )}
                            
                            {songData && (
                                <div className="mt-6 pt-4 border-t border-slate-300 dark:border-slate-600">
                                    <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                        Song Information:
                                    </h4>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                        {songData.release_date && (
                                            <p>Released: {songData.release_date}</p>
                                        )}
                                        <p>
                                            <a 
                                                href={songData.genius_url || song.result.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                View on Genius
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SongLyricsPage;