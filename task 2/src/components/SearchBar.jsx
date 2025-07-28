const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search movies..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
