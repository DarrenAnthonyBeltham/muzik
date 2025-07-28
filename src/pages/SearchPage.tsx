import React, { useState } from 'react';
import { searchSongs } from '../services/geniusApi';
import { SongHit } from '../types/genius';
import { SearchBar } from '../components/SearchBar';
import { SongResults } from '../components/SongResults';
import { SongLyricsPage } from '../components/SongLyricsPage';

const Drake = require('../assets/drake.webp');
const CentralCee = require('../assets/centralcee.jpg');
const CAS = require('../assets/CAS.jpg');

export const SearchPage = () => {
    const [query, setQuery] = useState<string>('');
    const [songs, setSongs] = useState<SongHit[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [selectedSong, setSelectedSong] = useState<SongHit | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query) return;

        setIsLoading(true);
        setError(null);
        setSongs([]);
        setHasSearched(true);
        setSelectedSong(null); 

        try {
            const results = await searchSongs(query);
            if (results.length > 0) {
                setSongs(results);
            } else {
                setError(`No results found for "${query}".`);
            }
        } catch (err) {
            setError("Failed to fetch data from the Genius API. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    if (selectedSong) {
        return <SongLyricsPage song={selectedSong} onBack={() => setSelectedSong(null)} />;
    }

    return (
        <section className='py-16'>
            <div className='container mx-auto justify-center text-center space-y-5'>
                <h1 className='font-bold text-7xl'>Find the soul <br />in the <span className='text-brand-accent'>lyrics.</span></h1>
                
                <p className='text-gray-600 dark:text-gray-400 text-xl w-full md:w-1/2 text-center mx-auto'>Dive deeper than the melody. Search for any artist and uncover the meaning behind their music, one line at a time.</p>

                <SearchBar 
                    query={query}
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                    isLoading={isLoading}
                />

                <div className='mt-8 flex items-center justify-center space-x-4'>
                    <span className='text-sm font-medium text-slate-500 dark:text-slate-400'>Trending:</span>
                    <div className='flex space-x-4'>
                        <img src={Drake} alt="Drake" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'/>
                        <img src={CentralCee} alt="Central Cee" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'/>
                        <img src={CAS} alt="Cigarettes After Sex" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'/>
                    </div>
                </div>

                {isLoading && <p className="text-slate-600 dark:text-slate-400 mt-8">Searching...</p>}
                
                {error && <p className="text-red-500 mt-8">{error}</p>}

                {!isLoading && !error && hasSearched && (
                    <SongResults songs={songs} onSongSelect={setSelectedSong} />
                )}
            </div>
        </section>
    );
};

export default SearchPage