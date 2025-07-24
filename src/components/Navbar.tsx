import React from 'react'
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'react-feather'

const Navbar = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className='py-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold text-brand-accent'>Muzik</h1>
                </div>

                <div>
                     <button onClick={toggleTheme} className='p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors'>
                        {theme === 'dark' ? (<Sun size={20} className="text-slate-200" /> ) : (<Moon size={20} className="text-slate-800" />)}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
