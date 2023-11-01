import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, getMovieVideo, getMoviecast } from '../servies/Callapi'
import moment from 'moment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactPlayer from 'react-player'

function Movie() {

    const [movie, setMovie] = useState([])
    const [movieCast, setMovieCast] = useState([])
    const [movieVideo, setMovieVideo] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getMovieDetails(id).then((res) => {
            setMovie(res)
        })
        getMoviecast(id).then((res) => {
            setMovieCast(res.cast.slice(0, 8))
        })
        getMovieVideo(id).then((res) => {
            setMovieVideo(res.results.slice(0, 4))
        })
    }, [])

    console.log(movieVideo);
    return (
        <div>
            <div className="detail-card">
                <div className="container">
                    <div className="row">
                        <div className="detail-poster">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                        </div>
                        <div className="detail-details">

                            <div className="details-header mb-10">
                                <h2 className='text-4xl font-bold'>{movie.title}</h2>
                                <p className='text-lg font-semibold'>{moment(movie.release_date, "YYYY-MM-DD").format("DD-MM-YYYY")}</p>
                            </div>



                            <Tabs>
                                <TabList>
                                    <Tab>Information</Tab>
                                    <Tab>Star Cast</Tab>
                                    <Tab>Videos</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="information mt-10">
                                        <p className='text-2xl font-semibold mb-4 text-justify'>{movie.overview}</p>
                                        <p className='text-lg mb-4'> <b className='text-2xl'> Popularity :</b> <span>{movie.popularity}</span></p>
                                        <p className='text-lg mb-4'> <b className='text-2xl'> Vote Average :</b> <span>{movie.vote_average}</span></p>
                                        <p className='text-lg mb-4'> <b className='text-2xl'> Vote Count :</b> <span>{movie.vote_count}</span></p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="cast-details">
                                        <div className="row">
                                            {movieCast.map((m, index) => {
                                                return (
                                                    <div className="cast-card" key={index}>
                                                        <img src={`https://image.tmdb.org/t/p/original${m.profile_path}`} alt="" />
                                                        <p className='py-2'>{m.original_name}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    {
                                        movieVideo.map((video) => {
                                            return (
                                                <div className="video-card my-4">
                                                    <ReactPlayer className url={`https://www.youtube.com/watch?v=${video.key}`} />
                                                </div>
                                            )
                                        })
                                    }
                                </TabPanel>

                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movie