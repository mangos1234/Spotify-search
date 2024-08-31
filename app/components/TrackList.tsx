type Track = {
    name: string,
}

export default function TrackList({ trackList }: { trackList: Track[] }) {
    console.log('track list inside of track list: ', trackList);
    return (
        <>
            {trackList.map((track: Track, index:number) => {
                return <p key={index}>{track.name}</p>
            })}
        </>
    )
}