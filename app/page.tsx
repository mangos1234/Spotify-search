'use client';
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import useToken from "./hooks/useToken";
import TrackList from "./components/TrackList";
import Track from "./types/Track";

export default function Home() {
  const { token, error, isLoading } = useToken();
  const [trackList, setTrackList] = useState<Track[]>([]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="w-screen px-4 justify-center flex flex-col mx-auto sm:max-w-sm md:max-w-2xl my-4">
        <SearchBar token={token} setTrackList={setTrackList} />
        <TrackList trackList={trackList} />
    </div>
  );
}