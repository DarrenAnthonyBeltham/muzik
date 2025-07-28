import React from 'react'
import { Search } from 'react-feather';
import searchBar from '../components/SearchBar';

const Drake = require('../assets/drake.webp');
const CentralCee = require('../assets/centralcee.jpg');
const CAS = require('../assets/CAS.jpg');

const SearchSection = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto justify-center text-center space-y-5'>
                <h1 className='font-bold text-7xl'>Find the soul <br />in the <span className='text-brand-accent'>lyrics.</span></h1>

                <p className='text-gray-600 text-xl w-1/2 text-center mx-auto'>Dive deeper than the melody. Search for any artist and uncover the meaning behind their music, one line at a time.</p>

                

                <div className='mt-8 flex items-center justify-center space-x-4'>
                    <span className='text-sm font-medium text-slate-500 dark:text-slate-400'>Trending:</span>
                    <div className='flex space-x-4'>
                        <img src={Drake} alt="Drake" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'/>
                        <img src={CentralCee} alt="Central Cee" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'/>
                        <img src={CAS} alt="Cigarettes After Sex" className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchSection
