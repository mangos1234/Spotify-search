'use client';
import { useQuery } from "react-query";

type Params = {
    q: string,
    type: string,
}

const useTrack = (params: Params, token: string) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['searchResults', params.q],
        queryFn: () =>
            fetch(`https://api.spotify.com/v1/search?${new URLSearchParams(params)}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            }).then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            }),
    });

    return { track: data, error, isLoading };
}
export default useTrack;