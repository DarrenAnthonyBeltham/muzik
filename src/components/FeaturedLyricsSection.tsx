import React from 'react';
const Pyschodrama = require('../assets/Psychodrama.webp');

const FeaturedLyricsSection = () => {
    return (
        <section className="container mx-auto px-6 mt-24 md:mt-32">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Lyrics</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">See how it works with a classic.</p>
            </div>
            <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col md:flex-row gap-8">
                    <img src={Pyschodrama} alt="Album Art" className="w-full md:w-1/3 rounded-lg shadow-lg object-cover" />
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Black</h3>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">Dave</p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            I know they say the first love is the sweetest, but that first love's the hardest,
                            And I'm still looking for a heart that matches my heart,
                            I'm just tryna find a place where I can park it
                        </p>
                        <button className="mt-8 w-full md:w-auto px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-80" style={{ backgroundColor: 'var(--accent-color)' }}>
                            Explore "Psychodrama"
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedLyricsSection
