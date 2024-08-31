'use client';
import { useQuery } from "react-query";

const useToken = () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error('Client ID or Client Secret is not defined, add them in the .env');
    }
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['token'],
        queryFn: () =>
            fetch(`https://accounts.spotify.com/api/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'client_credentials',
                    client_id: clientId,
                    client_secret: clientSecret,
                }),
            }).then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            }),
    });

    return { token: data?.access_token, error, isLoading };
}
export default useToken;