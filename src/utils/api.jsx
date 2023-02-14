import { useState, useEffect } from 'react';

export async function queryApi(path, body = {}) {
    const res = await fetch('/api/' + path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body !== null ? JSON.stringify(body) : null,
    });
    return await res.json();
}

export function useApi(path, body = null) {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        queryApi(path, body).then(setResponse);
    }, [path, body]);

    const refetch = () => queryApi(path, body).then(setResponse);

    return { response, loading: response === null, refetch };
}
