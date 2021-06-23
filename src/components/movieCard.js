import React from "react";

export default function MovieCard({movie}){

    
    return (
         <div className="card">
            <img className="card-image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card-content">
            <h3 
            className="card-title">{movie.title}</h3>
            <div className="small"><p><b>RELEASE DATE:</b> {movie.release_date}</p></div>
            <div className="small"><p><b>RATING:</b> {movie.vote_average}</p></div>
            <p className="card-desc">{movie.overview}</p>
            </div>
            
        </div>
    )
}