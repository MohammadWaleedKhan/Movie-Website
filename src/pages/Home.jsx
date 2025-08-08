import { useEffect, useState } from "react";
import { getAllMovies, getSearchedMovies } from "../apis/index";
import MovieCards from "../components/MovieCards";
import "../assets/css/home.css";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResult = await getSearchedMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log("Fetch Search Error", err);
      setError("Fetch Search Error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading movies...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="main-wrap">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-flex">
            <input
              type="text"
              placeholder="Search for movies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <FaSearch className="search-button-icon" />
            </button>
          </div>
        </form>
        {movies.length === 0 ? (
          <div className="text-center py-8">No movies found</div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
              <MovieCards movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
