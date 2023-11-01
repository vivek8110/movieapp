import React from 'react'

function Card(props) {

    const {data,title,fun}=props
  return (
    <div>
         <div className="movie-carddd my-5">
            <div className="container">
                <h1 className='text-2xl font-bold mb-3'>{title}</h1>
                <div className="row">
                    {data.map((movie) => {
                        return (
                            <div key={movie.id} className="cardd" >
                                <div className="card-img">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                                    <p onClick={()=>window.location.href=`/movie/${movie.id}`}>{movie.title}</p>
                                </div>
                                <div className="card-content">
                                    <div className="card-title truncate">{movie.title}</div>
                                    {/* <div className="card-info">Release date : {movie.release_date}</div> */}
                                    <button onClick={()=>fun(movie)} className='bg-blue-600 text-white rounded text-[14px] p-2 b-0'>Add to Watchlist</button>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card