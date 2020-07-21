import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {

  return (
    <div className="container">
      <img className="movie-image" src={props.image} alt="" />
      <h1 className="title">{props.title}</h1>
      <p className="summary">{props.summary}</p>
      <p className="year">{props.year} {props.genres}</p>
      <p className="genre">{props.genre}</p>
      <div className="stars">
        <p className="rating">{props.rating}</p>
        <svg width="255" height="240" viewBox="0 0 51 48">
          <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
        </svg>
      </div>
      <a href={props.torrent}>
        <button className="continue">Download Torrent</button>
      </a>
    </div>
  );
};

export default MovieCard;