import React from 'react';

function Detail(route) {
    const [data, setData] = React.useState([]);

    const getInfo = async () => {
        const result = await fetch(`https://rickandmortyapi.com/api/character/${route.id}`);
        const data = await result.json()
        setData(data)
    };

    React.useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className='details'>
            <img src={data.image} />
            <h1> { data.name } </h1>
            <h3> status: { data.status } </h3>
        </div>
    );
}

export default Detail;