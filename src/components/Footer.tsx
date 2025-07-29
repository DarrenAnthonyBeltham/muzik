import React from 'react'
import { Instagram, GitHub, Linkedin } from 'react-feather'

const Footer = () => {
    return (
        <footer className="container mx-auto px-6 py-12 mt-24 text-center text-slate-500">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://github.com/DarrenAnthonyBeltham" className="hover:text-[--accent-color]"><GitHub></GitHub></a>
                <a href="https://instagram.com/darrenab_" className="hover:text-[--accent-color]"><Instagram></Instagram></a>
                <a href="https://www.linkedin.com/in/darrenanthonybeltham" className="hover:text-[--accent-color]"><Linkedin></Linkedin></a>
            </div>
            <p>&copy; 2025 Muzik. All Rights Reserved.</p>
            <p className="text-sm mt-1">Designed to bring you closer to the music.</p>
        </footer>
    )
}

export default Footer
