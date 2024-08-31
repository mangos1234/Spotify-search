type Track = {
    name: string,
    album: {
        images: {
            height: number,
            url: string,
            width: number,
        }[],
    },
    artists: {
        name: string,
        href: string,
    }[],
}

export default Track;