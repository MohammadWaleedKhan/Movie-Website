import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import backupImg from "../assets/img/movie_icon.png";
import { useMovieContext } from "../context/MovieContext";

export default function MovieCards({ movie }) {
  const { isFav, removeFromFav, addToFav } = useMovieContext();

  const favourite = isFav(movie.id);

  const handleFav = (e) => {
    e.preventDefault();
    if (favourite) {
      removeFromFav(movie.id);
    } else {
      addToFav(movie);
    }
  };

  return (
    <div className="">
      <div key={movie.id} className="relative">
        <button
          className="group absolute top-2 right-2 z-10 p-2 rounded-full bg-black/20 text-white"
          onClick={handleFav}
        >
          {favourite ? (
            <MdFavorite className="text-red-500 transition-all" />
          ) : (
            <MdFavoriteBorder className="text-xl group-hover:text-red-500 transition-all" />
          )}
        </button>
        <a href={movie.backdrop_path} className="group">
          <img
            alt={movie.original_title}
            // src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : backupImg
            }
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            onError={(e) => {
              e.target.src = backupImg; // Additional fallback if image URL fails to load
            }}
          />
          <p className="mt-4 text-lg font-medium text-gray-900">
            {movie.original_title}
          </p>
          <h3 className="mt-1 text-sm text-gray-700">
            {movie.release_date?.split("-")[0]}
          </h3>
        </a>
      </div>
    </div>
  );
}
