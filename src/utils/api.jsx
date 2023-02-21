import { useState, useEffect } from 'react';

// Send request to backend
export async function queryApi(
    path,
    body = {},
    method = 'POST',
    toastOptions = {}
) {
    const res = await fetch('/api/' + path, {
        method,
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

// Promise .then() function for throwing when status does not equal 200.
// This is useful for using toast.promise
export function validateResponse(res) {
    if (res.status !== 200) {
        throw res;
    }
    return res;
}
