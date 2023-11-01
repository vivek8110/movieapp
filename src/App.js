
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import Movie from './components/Movie';
import PaginateMovie from './components/PaginateMovie';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Watchlist" element={<Watchlist />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/paginatedmovie" element={<PaginateMovie />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
