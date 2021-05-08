import React, {useState, useEffect} from 'react';

function Episode(route) {
    const [data, setData] = useState([]);

    const getEpisode = async () => {
        const result = await fetch(
            `https://rickandmortyapi.com/api/episode/`,
        );
        const item = await result.json()
        console.log(route)

        setData(item.results)
    };

    useEffect(() => {
        getEpisode();
    }, []);

    return (
        <div>
            {/* {
                data.map(item => (
                    item.name
                ))
            } */}
        </div>
    )
}

export default Episode
