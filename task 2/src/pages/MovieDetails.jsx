import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../services/api";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieRes, creditsRes, videosRes] = await Promise.all([
          axiosInstance.get(`/movie/${id}`),
          axiosInstance.get(`/movie/${id}/credits`),
          axiosInstance.get(`/movie/${id}/videos`),
        ]);

        setMovie(movieRes.data);
        setCast(creditsRes.data.cast.slice(0, 6)); // Show top 6 cast members
        const trailerVideo = videosRes.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailer(trailerVideo);
      } catch (err) {
        console.error("Error fetching movie details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!movie) return <div className="text-center mt-5">Movie not found</div>;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">← Back to Home</Link>

      <div className="row">
        <div className="col-md-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750"
            }
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}</p>
          <p className="mt-3">{movie.overview}</p>

          {/* Trailer */}
          {trailer && (
            <div className="mt-4">
              <h5>Watch Trailer:</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube trailer"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cast */}
      {cast.length > 0 && (
        <div className="mt-5">
          <h4>Top Cast</h4>
          <div className="d-flex flex-wrap gap-3">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center" style={{ width: "120px" }}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                      : "https://via.placeholder.com/100x150"
                  }
                  alt={actor.name}
                  className="img-fluid rounded"
                />
                <p className="mb-0 mt-1">{actor.name}</p>
                <small className="text-muted">{actor.character}</small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
