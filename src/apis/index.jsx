import axios from "axios";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ec3231fb8cbdf6c4a5a158678f151df2",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllMovies = async () => {
  try {
    const response = await movieApi.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.log("Error fetching popular movies", error);
    throw error;
  }
};
export const getSearchedMovies = async (query) => {
  try {
    const response = await movieApi.get("/search/movie", {
      params: {
        query: query,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log("Error Searching movies", error);
    throw error;
  }
};
