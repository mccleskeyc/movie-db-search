import React from "react";

export default function ReviewCard({movie}){


        return (
            <>
                <br />
                <div className="review-card">
                    <div className="card-content">
                        <blockquote>"{movie.title}"</blockquote>
                        <div className="author"> - Author</div>
                    </div>
                </div>
            </>
           
       )


    
}