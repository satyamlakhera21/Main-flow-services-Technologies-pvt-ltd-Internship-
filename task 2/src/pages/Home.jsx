import React, { useEffect, useState } from "react";
import axiosInstance from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SortBar from "../components/SortBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch Genres List
  useEffect(() => {
    const fetchGenres = async () => {
      const res = await axiosInstance.get("/genre/movie/list");
      setGenres(res.data.genres);
    };
    fetchGenres();
  }, []);

  // Fetch Movies (Popular or Search + Filters)
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let url = "";
        let params = {
          page,
          sort_by: sortBy,
          with_genres: selectedGenre || undefined,
          primary_release_year: selectedYear || undefined,
          query: searchQuery || undefined,
        };

        if (searchQuery.trim()) {
          url = "/search/movie";
        } else {
          url = "/discover/movie";
        }

        const res = await axiosInstance.get(url, { params });
        if (page === 1) {
          setMovies(res.data.results);
        } else {
          setMovies((prev) => [...prev, ...res.data.results]);
        }
        setTotalPages(res.data.total_pages);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, selectedGenre, selectedYear, sortBy, searchQuery]);

  // Reset Page on Filter/Search Change
  useEffect(() => {
    setPage(1);
  }, [selectedGenre, selectedYear, sortBy, searchQuery]);

  const handleLoadMore = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🎬 Movie Explorer</h2>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-8">
          <FilterBar
            genres={genres}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </div>
        <div className="col-md-4">
          <SortBar sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      {/* Movies Grid */}
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Load More Button */}
      {page < totalPages && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
