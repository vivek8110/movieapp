import React, { useState } from 'react'
import Card from '../components/Card';

function Moviecard(props) {
    const [lsmovie, setLsMovies] = useState([])


    const sendmovietols = (movie) => {
        const getmoviesfromls = JSON.parse(localStorage.getItem('movie')) || []
        console.log(getmoviesfromls);
        const ismovieinls = getmoviesfromls.some((m) => m.id === movie.id);
        console.log(ismovieinls);
        if (!ismovieinls) {
            setLsMovies(movie)

            localStorage.setItem(('movie'), JSON.stringify([...getmoviesfromls, movie]))
        } else {
            alert('movie already exist in watchlist')
        }

    }



    const { title, varName } = props
    return (
        
        <Card data={varName} title={title} fun={sendmovietols} />
    )
}

export default Moviecard