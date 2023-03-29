import React from 'react';

const SingleMovie = ({movie}) => {

    return (
        <div>
            <div className="movie-container card mb-3">
                <div className="movie-cart">
                    <div className="poster">
                        <img className='w-25' src={movie.poster} alt="" />
                    </div>
                    <h4>Name: {movie.movieName}</h4>
                    <p>Description: {movie.description}</p>
                    <div className="timeRating d-flex justify-content-around">
                        <p>Watch Time: {movie.watchTime}</p>
                        <p>Rating: {movie.imdbRating}</p>
                    </div>
                    <button className='btn btn-success w-50'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleMovie;