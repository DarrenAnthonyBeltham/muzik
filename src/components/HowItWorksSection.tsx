import React from 'react';
import { Search, Disc, AlignLeft } from 'react-feather'; 

const HowItWorksSection = () => {

    return (
        <section className="container mx-auto px-6 mt-10 md:mt-16">
            <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-200 dark:bg-slate-800 mb-4 text-brand-accent">
                        <Search className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Search Any Artist</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Use our powerful search to find any artist in the Genius database.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-200 dark:bg-slate-800 mb-4 text-brand-accent">
                        <Disc className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Explore Albums</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Browse through their entire discography with dynamic, album-specific themes.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-200 dark:bg-slate-800 mb-4 text-brand-accent">
                        <AlignLeft data-feather="AlignLeft" className="h-8 w-8"/>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Uncover Lyrics</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Get the full lyrics for any song and understand the story behind it.</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection
