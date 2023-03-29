import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Main = ({handleWatchTime}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    return (
        <div>
            {
                movies.map( (movie) => <SingleMovie handleWatchTime={handleWatchTime} movie={movie} key={movie.id}></SingleMovie> )
            }
        </div>
    );
};

export default Main;