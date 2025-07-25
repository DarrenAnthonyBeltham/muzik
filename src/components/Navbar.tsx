import React from 'react'
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'react-feather'

const Navbar = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <section className='py-4 md:py-6'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold text-brand-accent'>
                        Muzik
                    </h1>
                </div>

                <div>
                     <button 
                        onClick={toggleTheme} 
                        className='p-2 sm:p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-50'
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                    >
                        {theme === 'dark' ? (
                            <Sun size={18} className="text-slate-200 sm:w-5 sm:h-5" /> 
                        ) : (
                            <Moon size={18} className="text-slate-800 sm:w-5 sm:h-5" />
                        )}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Navbar;