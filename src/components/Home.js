import React, { useEffect, useState } from 'react'
import { popularmovies, topratedmovie, topratedseries, upcomingmovie } from '../servies/Callapi'
import Moviecard from '../servies/Moviecard'
import MovieLoader from './MovieLoader'

function Home() {

    const [toprated, setToprated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [popular, setPopular] = useState([])
    const [topseries, setTopseries] = useState([])
    const [loading, setLoading] = React.useState(true);


    useEffect(() => {
        topratedmovie().then((res) => {
            setToprated(res.results.slice(0, 7))
        })
        upcomingmovie().then((res) => {
            setUpcoming(res.results.slice(0, 7))
        })
        popularmovies().then((res) => {
            setPopular(res.results.slice(0, 7))
        })
        topratedseries().then((res) => {
            setTopseries(res.results.slice(0, 7))
        })
        setLoading(false);

    }, [])

    console.log(topseries);

    if (loading) return <div><MovieLoader /></div>


    return (

        <>
            <Moviecard title="Top Rated Movies" varName={toprated} />
            <Moviecard title="Upcoming Movies" varName={upcoming} />
            <Moviecard title="Popular Movies" varName={popular} />
            <Moviecard title="Trending Movies" varName={topseries} />
        </>
    )
}

export default Home