'use client';

import { useEffect, useState } from "react";
import useTrack from "../hooks/useTrack";
import Track from "../types/Track";

export default function SearchBar({ token, setTrackList }: { token: string, setTrackList: (trackList: Track[]) => void; }) {
    const [query, setQuery] = useState('no');
    const [message, setMessage] = useState('');

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
            setMessage('Please enter a valid search term.')
            return;
        }
        else {
            setQuery(inputValue.value); 
        }
    };

    return (
        <>
            <form data-testid="searchForm" onSubmit={handleSearch} className="w-full flex space-x-2">
                <label htmlFor="searchBar" className="sr-only">Search:</label>
                <input type="text" id="searchBar" name="searchBar" placeholder="Search..." className="w-full focus:outline-gray-200 border border-gray-100 p-1 rounded-md"></input>
                <button className="bg-green-300 rounded-md px-1 focus:border focus:outline-gray-200" type="submit">Search</button>
            </form>
            <p>{message}</p>
        </>
    )
}