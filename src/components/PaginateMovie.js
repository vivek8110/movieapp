import React, { useEffect, useState } from 'react'
import { getNowMovie } from '../servies/Callapi'
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';


function Items({ movies }) {
    return (
        <>
            {/* {
                movies.map((m) => {
                    return (
                        <>
                            <div className='my-2'>
                                <p>{m.original_title}</p>
                                <p>{m.id}</p>
                            </div>
                        </>
                    )

                })
            } */}

            <Card data={movies}/>
        </>
    )
}

function PaginateMovie() {
    const [movies, setMovies] = useState([])

    const [count, setCount] = useState(1)
    const [totalpages, setTotalPages] = useState()
    const itemsperpage = 20
    const totalitems = totalpages * itemsperpage
    const pagecount = Math.ceil(totalitems / itemsperpage)



    useEffect(() => {
        getNowMovie(count).then((res) => {
            setMovies(res?.results || [])
            setTotalPages(res?.total_pages)
        })
    }, [count])
    // console.log(movies, 'movies');
    const handleCountClick = (number) => {
        setCount(number);
    }
    const handlePageClick = (event) => {


        console.log(event, "this is event")


        setCount(event.selected + 1)
    };
    return (
        <div>
            <Items movies={movies} />

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pagecount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />

        </div>
    )
}

export default PaginateMovie
