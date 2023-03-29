import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    return (
        <div>
            {
                movies.map( (movie) => <SingleMovie movie={movie}></SingleMovie> )
            }
        </div>
    );
};

export default Main;