import MovieCards from "../components/MovieCards";
import { useMovieContext } from "../context/MovieContext";

const Favourite = () => {
  const { favourite } = useMovieContext();

  if (favourite) {
    return (
      <>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {favourite.map((movie) => (
              <MovieCards movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
};

export default Favourite;
