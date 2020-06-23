import React, {useEffect, useState} from 'react'
import useFetch from './customHooks/useFetch'
import useFetchAsync from './customHooks/useFetchAsync'

export default function DataLoader() {

    // const [data, setData] = useState([]);

    // Standard way of calling API
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => setData(json))
    // }, []);

    // Using custom hook
    // const data = useFetch('https://jsonplaceholder.typicode.com/users');

    // Using custom hook with async wait
    const data = useFetchAsync('https://jsonplaceholder.typicode.com/users');
    const data2 = useFetchAsync('https://jsonplaceholder.typicode.com/todos');

    return (
        <>
        <ul>
            {data.slice(0,5).map(el => (
                <li key={el.id}>{el.name}</li>
            ))}
        </ul>
        <br></br> 
        <ul>
            {data2.slice(0,10).map(el => (
                <li key={el.id}>{el.title}</li>
            ))}
        </ul>  
        </>
    )
}
