import Image from "next/image";
import Track from "../types/Track";

export default function TrackList({ trackList }: { trackList: Track[] }) {
    console.log('track list inside of track list: ', trackList);
    return (
        <div className="my-10">
            {trackList.map((track: Track, index:number) => {
                return (
                    <div key={index}>
                        {index !== 0 && <div className="border border-gray-50"></div>}
                        <div className="flex space-x-3 hover:bg-gray-50 p-2 rounded-md">
                            <Image width={60} height={60} alt={track.name} src={track.album.images[0].url} className="rounded-full hover:scale-110 w-16 h-16"></Image>
                            <div>
                                <p className="text-lg">{track.name}</p>
                                <div className="flex">
                                    {track.artists.map((artist, index) => {
                                        return (
                                            <p className="text-gray-500" key={index}>{index > 0 ? `, ${artist.name}` : artist.name}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}