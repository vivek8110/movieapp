import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className="bg-blue-500 p-2">
                <div className="container lg:container-md mx-auto">
                    <nav className="flex justify-between items-center">
                        <div className="text-white text-4xl font-semibold">F<span>movies</span></div>
                        <ul className="flex space-x-4">
                            <li className="text-white px-2 text-xl hover:text-gray-300 hover:cursor:pointer">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white px-2 text-xl hover:text-gray-300 hover:cursor:pointer">
                                <Link to="/paginatedmovie">New Release</Link>
                            </li>
                            <li className="text-white px-2 text-xl hover:text-gray-300 hover:cursor:pointer">
                                <Link to="/Watchlist">Watchlist</Link>
                            </li>
                            <li className="text-white px-2 text-xl hover:text-gray-300 hover:cursor:pointer">
                                <Link to="/movie">Movie</Link>
                            </li>
                            <li className="text-white px-2 text-xl hover:text-gray-300 hover:cursor:pointer">
                                <Link to="/search">search</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header