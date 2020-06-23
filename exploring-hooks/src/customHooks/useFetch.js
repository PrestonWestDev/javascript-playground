import { useState, useEffect } from 'react'

/**
 * Custom hook for making a GET request
 * @param url 
 */
export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data));
    }, [url]);
    return data;
}