import { useState } from "react";
import movieList from "../movielist.json";
import movieDataContext from "./movieDataContext";

export const MovieData = (props) => {
  const [movieData, setMovieData] = useState(movieList);
  const [searchMovieData, setSearchMovieData] = useState(movieList);

  const deleteMovieById = (movie_id) => {
    setMovieData((prevData) => ({
      ...prevData,
      movies: prevData.movies.filter((item) => item.movie_id !== movie_id),
    }));
    setSearchMovieData((prevData) => ({
      ...prevData,
      movies: prevData.movies.filter((item) => item.movie_id !== movie_id),
    }));
  };

  const updateById = (changeMovieData) => {
    setMovieData((prevData) => ({
      ...prevData,
      movies: prevData.movies.map((item) =>
        item.movie_id === changeMovieData.movie_id ? changeMovieData : item
      ),
    }));
  };

  const searchMovies = (title) => {
    if (title !== "") {
      setMovieData((prevData) => ({
        ...prevData,
        movies: searchMovieData.movies.filter((item) =>
          item.title.toLowerCase().includes(title.toLowerCase())
        ),
      }));
    } else {
      setMovieData(searchMovieData);
    }
  };

  const ascendingSortMovies = () => {
    setMovieData((prevData) => ({
      ...prevData,
      movies: movieData.movies.sort((a, b) => a.title.localeCompare(b.title)),
    }));
  };

  const descendingSortMovies = () => {
    setMovieData((prevData) => ({
      ...prevData,
      movies: movieData.movies.sort((a, b) => b.title.localeCompare(a.title)),
    }));
  };

  return (
    <movieDataContext.Provider
      value={{
        movieData,
        deleteMovieById,
        updateById,
        searchMovies,
        ascendingSortMovies,
        descendingSortMovies,
      }}
    >
      {props.children}
    </movieDataContext.Provider>
  );
};
