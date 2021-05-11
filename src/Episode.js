import React, {useState, useEffect} from 'react';

function Episode(route) {
    const [data, setData] = useState([]);

    const getEpisode = async () => {
        const result = await fetch(
            `https://rickandmortyapi.com/api/episode/${route.id}`,
        );
        const item = await result.json()
        setData(item)
    };

    useEffect(() => {
        getEpisode();
    }, []);

    return (
        <div>
            {
                data.map(item=> {
                    <p>{console.log(item)}</p>
                })
                
            }
        </div>
    )
}

export default Episode
