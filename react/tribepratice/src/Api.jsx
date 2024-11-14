import React, { useState, useEffect } from 'react';

export const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=d3839580a50b41cebbb100436240511&q=London')
            .then(res => res.json())
            .then(json => {
                if (json.location) {
                    setData([json.location]);
                } else {
                    console.error("Location data is undefined");
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <>
        <h1> this is weather report </h1>
            {data.length > 0 ? (
                data.map((list, index) => (
                    <h1 key={index}>{list.name}, {list.region}, {list.localtime}</h1>
                ))
            ) : (
                <p>Loading data...</p>
            )}
        </>
    );
}
