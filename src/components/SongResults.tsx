import React from 'react'
import { SongHit } from '../types/genius'

interface SongResultsProps {
    songs: SongHit[];
}

export const SongResults = ({songs}: SongResultsProps) => {

    if(songs.length === 0) {
        return null;
    }

    return (
        <div className='mt-12 text-left'>
            
        </div>
    )
}

export default SongResults
