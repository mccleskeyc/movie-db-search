import React, {useState} from "react";
import SuggestionCard from './SuggestionCard';
import ReviewCard from './ReviewCard';
export default function MovieCard({movie}){
    const [movies, setMovies] = useState([]);
    const recMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&page=1`;
        
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
        const url = `https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&page=1`;
        
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
         <div className="card">
            <img className="card-image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card-content">
            <a href= {`https://www.themoviedb.org/movie/${movie.id}`}><h3 className="card-title">{movie.title}</h3></a>
            <div className="small"><p><b>RELEASE DATE:</b> {movie.release_date}</p></div>
            <div className="small"><p><b>RATING:</b> {movie.vote_average}</p></div>
            <p className="card-desc">{movie.overview}</p>
            <div className="btnCenter"><button onClick={recMovies} className="recButton">See more movies like this</button></div>
            <div className="btnCenter"><button onClick={getReviews} className="recButton">See Reviews for {movie.title} </button></div>
            </div>

            
            {movies.filter(movie => movie.poster_path).map(movie => (
                <SuggestionCard movie={movie} key={movie.id} />
            ))}
            <ReviewCard movie={movie} key={movie.id} />

        </div>
        
    )
}