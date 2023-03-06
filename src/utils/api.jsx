import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const API_PATH = import.meta.env.VITE_API_SERVER?.trim() === 'local' ?
    '/api' : 
    'https://gidinstemme-back-test.azurewebsites.net/';

// Send request to backend
export async function queryApi(path, body = {}, options = {}) {
    const promise = fetch(API_PATH + path, {
        method: options?.method ?? 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: body !== null ? JSON.stringify(body) : null,
    })
        .then(validateResponse)
        .then((res) => res.json());

    if (options?.toast) {
        toast.promise(promise, options.toast);
    }

    return promise;
}

export function useApi(path, body = null, options = {}) {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        setResponse(null);
        queryApi(path, body)
            .then((res) => {
                setTimeout(() => setResponse(res), 2000);
            });
    }, [path, body]);

    const refetch = () => queryApi(path, body, options).then(setResponse);

    return { response, loading: response === null, refetch };
}

// Promise .then() function for throwing when status does not equal 200.
// This is useful for using toast.promise
export function validateResponse(res) {
    if (res.status < 200 || res.status > 299) {
        throw res;
    }
    return res;
}
