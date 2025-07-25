import React from 'react'

const Footer = () => {
    return (
        <footer className="container mx-auto px-6 py-12 mt-24 text-center text-slate-500">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="hover:text-[--accent-color]"><i data-feather="github"></i></a>
                <a href="#" className="hover:text-[--accent-color]"><i data-feather="twitter"></i></a>
                <a href="#" className="hover:text-[--accent-color]"><i data-feather="linkedin"></i></a>
            </div>
            <p>&copy; 2025 Muzik. All Rights Reserved.</p>
            <p className="text-sm mt-1">Designed to bring you closer to the music.</p>
        </footer>
    )
}

export default Footer
