import React, { useEffect, useState } from 'react'
import { searchmovie } from '../servies/Callapi'


function Search() {
    const [searchterm, setsearchterm] = useState('')
    const [movie, setMovie] = useState([])




    useEffect(() => {


        if (!searchterm) return
        searchmovie(searchterm).then((res) => setMovie(res.results))
    }, [searchterm])




    return (
        <div>

            {/* <Header /> */}

            <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative w-[50%] mx-auto mt-3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(e) => setsearchterm(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies....." />
                    <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>

            {

                <div className="movie-carddd">
                    <div className="container">
                        <div className="row">
                            {movie.map((movie) => {
                                return (
                                    <div key={movie.id} className="cardd">
                                        <div className="card-img">
                                            {movie.poster_path ? (
                                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                                            ) : (
                                                <img src="url_of_placeholder_thumbnail_image" alt={movie.title} />
                                            )}
                                            <p>{movie.title}</p>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-title truncate">{movie.title}</div>
                                            <button className='bg-blue-500/70 rounded text-[14px] p-2 b-0'>Add to Watchlist</button>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>


            }

        </div>
    )
}

export default Search