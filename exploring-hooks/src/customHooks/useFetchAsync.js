import { useState, useEffect } from 'react'

/**
 * Custom hook for making Asynchronous GET Requests
 * @param url 
 */
export default function useFetchAsync(url) {
    const [data, setData] = useState([]);
    
    async function getData() {
    const response = await fetch(url);
    const data = await response.json();
        setData(data)
    }

    useEffect(() => {
        getData();
    }, [url]);

    return data;
}