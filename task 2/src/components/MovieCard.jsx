import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imgUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750";

  return (
    <div className="col-md-3 mb-4">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <div className="card h-100">
          <img src={imgUrl} className="card-img-top" alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">⭐ {movie.vote_average}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
