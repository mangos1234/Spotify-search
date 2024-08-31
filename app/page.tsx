'use client';
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import useToken from "./hooks/useToken";
import TrackList from "./components/TrackList";


type Track = {
  name: string,
}

export default function Home() {
  const { token, error, isLoading } = useToken();
  const [trackList, setTrackList] = useState<Track[]>([]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <SearchBar token={token} setTrackList={setTrackList} />
      <TrackList trackList={trackList} />
    </>
  );
}