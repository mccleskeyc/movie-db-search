import React from "react";

export default function SuggestionCard({movie}){


        return (
            <>
               <a href= {`https://www.themoviedb.org/movie/${movie.id}`}>
               <img className="card-image-mini"
                   src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                   alt={movie.title + ' poster'}
                   />
                   </a>
           </>
           
       )


    
}