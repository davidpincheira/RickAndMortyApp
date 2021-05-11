import React, {useEffect, useState} from 'react'
import { Link} from '@reach/router'

function Search() {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    const episodes = []

    const handleSubmit = (event) => {
      event.preventDefault();
      setSearch(query)
    }
  
    const obtenerData = async() => {
      const item = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      const user = await item.json()
      setData(user.results)
    }
  
    useEffect(() => {
      obtenerData()
    }, [search])
  
    return (
      <div className="results-wrapper">
        <form onSubmit={handleSubmit}>
          <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
          <button type='submit'>Buscar</button>
        </form>
        <div className='results'>
          <ul>{
                data.map(item => (
                  <li key={item.id}>
                    <Link to={`/details/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                    </Link>
                    
                    <span className='name'> 
                      {item.name}
                    </span>
                    Status: {item.status} <p />
                    {item.species}<p />
                    
                    <Link to={`/episode/${item.id}`}>
                        Ir al Detalle del Episodio
                    </Link>
                    <p />
                    {
                      item.episode.forEach(element => {
                        episodes.push(element)
                      })
                    }
                    Episodes: {episodes.length}
                    <p />
                  </li>
                ))
              }
            </ul>
        </div>
          
      </div>
    );
  }

  export default Search