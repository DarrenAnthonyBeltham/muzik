import React, { useState, useEffect } from 'react';
import { searchSongs } from '../services/geniusApi';
import { SongHit } from '../types/genius';

const featuredQueries = [
    "Dave Black",
    "Kendrick Lamar HUMBLE.",
    "Lana Del Rey Young and Beautiful",
    "Arctic Monkeys Do I Wanna Know?",
    "Tame Impala The Less I Know The Better",
    "Frank Ocean Nights",
    "Billie Eilish bad guy"
];

const FeaturedLyricsSection = () => {
    const [song, setSong] = useState<SongHit | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeaturedSong = async () => {
            try {
                const randomQuery = featuredQueries[Math.floor(Math.random() * featuredQueries.length)];
                const results = await searchSongs(randomQuery);

                if (results && results.length > 0) {
                    setSong(results[0]);
                } else {
                    setError(`Could not find the featured song: "${randomQuery}"`);
                }
            } catch (err) {
                console.error("Error fetching song data:", err);
                setError("Failed to fetch data from the Genius API. Please check your API key and network connection.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeaturedSong();
    }, []);

    if (isLoading) {
        return (
            <section className="container mx-auto px-6 mt-24 md:mt-32 text-center">
                <p className="text-slate-600 dark:text-slate-400">Loading Featured Lyrics...</p>
            </section>
        );
    }

    if (error || !song) {
        return (
            <section className="container mx-auto px-6 mt-24 md:mt-32 text-center">
                 <h2 className="text-3xl font-bold text-red-500">Error</h2>
                 <p className="mt-2 text-slate-600 dark:text-slate-400">{error || "Song data is unavailable."}</p>
            </section>
        );
    }

    return (
        <section className="container mx-auto px-6 mt-24 md:mt-32">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Lyrics</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">See how it works with a classic.</p>
            </div>
            <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col md:flex-row gap-8">
                    <img src={song.result.song_art_image_url} alt="Album Art" className="w-full md:w-1/3 rounded-lg shadow-lg object-cover" />
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{song.result.title}</h3>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">{song.result.primary_artist.name}</p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                            Click the button below to see the full lyrics for this song directly on Genius.
                        </p>
                        <a 
                            href={song.result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-block w-full text-center md:w-auto px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-80" 
                            style={{ backgroundColor: 'var(--accent-color)' }}
                        >
                            View Full Lyrics on Genius
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedLyricsSection;
