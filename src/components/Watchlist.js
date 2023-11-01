// import { formToJSON } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Watchlist() {
    const [moviefromls, setMovieFromLs] = useState([])

    useEffect(() => {

        const movies = JSON.parse(localStorage.getItem('movie')) || []

        console.log(movies);
        setMovieFromLs(movies)


    }, [])


    return (
        <div className="movie-carddd">
            <div className="container">
                <div className="row">
                    {moviefromls?.map((movie) => {
                        return (
                            <div key={movie.id} className="cardd">
                                <div className="card-img">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                                    <p>{movie.title}</p>
                                </div>
                                <div className="card-content">
                                    <div className="card-title truncate">{movie.title}</div>
                                    {/* <div className="card-info">Release date : {movie.release_date}</div> */}
                                    <Link to={`/movie/${movie.id}`} className='bg-blue-600 text-white rounded text-[15px] py-2 px-6 b-0'>view</Link>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Watchlist