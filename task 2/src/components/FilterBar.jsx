import React from "react";

const FilterBar = ({
  genres,
  selectedGenre,
  setSelectedGenre,
  selectedYear,
  setSelectedYear,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i); // Last 30 years

  return (
    <div className="d-flex flex-wrap gap-3">
      {/* Genre Filter */}
      <select
        className="form-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        style={{ maxWidth: "200px" }}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

      {/* Year Filter */}
      <select
        className="form-select"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        style={{ maxWidth: "150px" }}
      >
        <option value="">All Years</option>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
