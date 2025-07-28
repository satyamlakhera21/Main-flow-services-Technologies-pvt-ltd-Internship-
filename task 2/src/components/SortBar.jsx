import React from "react";

const SortBar = ({ sortBy, setSortBy }) => {
  return (
    <select
      className="form-select"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="popularity.desc">Popularity ↓</option>
      <option value="popularity.asc">Popularity ↑</option>
      <option value="release_date.desc">Release Date ↓</option>
      <option value="release_date.asc">Release Date ↑</option>
      <option value="vote_average.desc">Rating ↓</option>
      <option value="vote_average.asc">Rating ↑</option>
    </select>
  );
};

export default SortBar;
