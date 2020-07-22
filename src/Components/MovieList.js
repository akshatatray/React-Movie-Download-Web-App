import React from 'react';
import MovieCard from './MovieCard';
import "./MovieList.css";

const MovieList = (props) => {
     if (props.loading) {
          return(
               <div className="loading">
                    <div className="spin">

                    </div>
               </div>
          );
     }
     const films = props.movies.map((movie) => {
          return (
               <MovieCard
                    key={movie.id}
                    genres={movie.genres[0]}
                    summary={movie.summary}
                    rating={movie.rating}
                    year={movie.year}
                    title={movie.title}
                    image={movie.medium_cover_image}
                    torrent={movie.torrents[0].url}
               ></MovieCard>
          );
     })
     return(
          <div className="card-container">
               { films }
          </div>
     );
}

export default MovieList;