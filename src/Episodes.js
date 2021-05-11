import React, {useState, useEffect} from 'react';

function Episodes(route) {
    const [data, setData] = useState([]);

    const getEpisode = async () => {
        const result = await fetch(
            `https://rickandmortyapi.com/api/episode/`,
        );
        const item = await result.json()
        setData(item.results)
    };

    useEffect(() => {
        getEpisode();
    }, []);

    return (
        <div>
            
                <ul>
                    {
                    data.map(item => (
                        <li>{item.name} - {item.air_date}</li>
                    ))
                    }
                </ul>
                
            
        </div>
    )
}

export default Episodes
