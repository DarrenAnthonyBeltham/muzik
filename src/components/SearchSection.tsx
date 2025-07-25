import React from 'react'
import { Search } from 'react-feather';

const SearchSection = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto justify-center text-center space-y-5'>
                <h1 className='font-bold text-7xl'>Find the soul <br />in the <span className='text-brand-accent'>lyrics.</span></h1>

                <p className='text-gray-600 text-xl w-1/2 text-center mx-auto'>Dive deeper than the melody. Search for any artist and uncover the meaning behind their music, one line at a time.</p>

                <form className='mt-12 max-w-2xl mx-auto'>
                    <div className='relative group'>
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400 group-focus-within:text-[--accent-color]">
                            <Search></Search>
                        </div>

                        <input
                            type="text"
                            placeholder="Search for an artist like 'Drake'..."
                            className="w-full pl-14 pr-6 py-5 rounded-full text-lg bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:outline-none focus:ring-2"
                            style={{ '--ring-color': 'var(--accent-color)' } as React.CSSProperties}  
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.setProperty('--ring-color', 'var(--accent-color)');
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.setProperty('--ring-color', 'transparent');
                            }}
                        />
                    </div>
                </form>

                <div className='mt-8 flex items-center justify-center space-x-4'>
                    <span className='text-sm font-medium text-slate-500 dark:text-slate-400'>Trending:</span>
                    <div className='flex space-x-4'>
                        <img src="" alt="Drake" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900'/>
                        <img src="" alt="Central Cee" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900'/>
                        <img src="" alt="Cigarettes After Sex" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchSection
