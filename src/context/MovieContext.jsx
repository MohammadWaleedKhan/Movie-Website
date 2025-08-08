import { useState, useEffect, createContext, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const storedFav = localStorage.getItem("favourite");
    if (storedFav) setFavourite(JSON.parse(storedFav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favourite));
  }, [favourite]);

  const addToFav = (movie) => {
    setFavourite((prev) => [...prev, movie]);
  };

  const removeFromFav = (movieId) => {
    setFavourite((prev = prev.filter((movie) => movie.id !== movieId)));
  };

  const isFav = (movieId) => {
    return favourite.some((movie) => movie.id === movieId);
  };

  const functionVal = { favourite, addToFav, removeFromFav, isFav };

  return (
    <MovieContext.Provider value={functionVal}>
      {children}
    </MovieContext.Provider>
  );
};
