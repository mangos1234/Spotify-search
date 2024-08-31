'use client';

import { useEffect, useState } from "react";
import useTrack from "../hooks/useTrack";

type Track = {
    name: string,
}

export default function SearchBar({ token, setTrackList }: { token: string, setTrackList: (trackList: Track[]) => void; }) {
    const [query, setQuery] = useState('no');

    const track = useTrack({ q: query, type: 'track' }, token);

    useEffect(() => {
        if (!track.isLoading) {
            setTrackList(track.track.tracks.items);
        }
    }, [track, setTrackList]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputValue = (e.target as HTMLFormElement).elements.namedItem('searchBar') as HTMLInputElement;
        if (inputValue.value.trim() === '') {
            return;
        }
        else {
            setQuery(inputValue.value); 
        }
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <label htmlFor="searchBar" className="sr-only">Search:</label>
                <input type="text" id="searchBar" name="searchBar" placeholder="Search..."></input>
                <button type="submit">search</button>
            </form>
        </>
    )
}