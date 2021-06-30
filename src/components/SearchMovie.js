import React, {useState} from "react";
import MovieCard from './movieCard'
export default function SearchMovie() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    const searchPopular= async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=5dcf7f28a88be0edc01bbbde06f024ab`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    const getReviews = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=5dcf7f28a88be0edc01bbbde06f024ab`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input 
                className="input" 
                type="text" 
                name="query" 
                placeholder="ie Toy Story" 
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            <button className="button" type="submit">Search</button>
        </form>
        <br />

        <div className="popularBtn" onClick={searchPopular}>Or, <u>see what's trending</u>.</div>

        <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </>
    )
}