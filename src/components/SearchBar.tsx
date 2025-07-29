import React from 'react';
import { Search } from 'react-feather';

interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
    handleSearch: (e: React.FormEvent) => void;
    isLoading: boolean;
}

export const SearchBar = ({ query, setQuery, handleSearch, isLoading }: SearchBarProps) => {
    return (
        <form className='mt-12 max-w-2xl mx-auto' onSubmit={handleSearch}>
            <div className='relative group'>
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400">
                    <Search />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for an artist like 'Drake'..."
                    className="w-full pl-14 pr-32 py-5 rounded-full text-lg bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:outline-none focus:ring-2"
                    style={{ '--ring-color': 'var(--accent-color)' } as React.CSSProperties}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
                />
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="absolute top-1/2 right-2 -translate-y-1/2 px-6 py-3 rounded-full font-bold text-white transition-all hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                >
                    {isLoading ? '...' : 'Search'}
                </button>
            </div>
        </form>
    );
};

export default SearchBar;