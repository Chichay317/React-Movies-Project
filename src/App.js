import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import FetchMovies from "./components/movies/FetchMovies";
import MoviesForm from "./components/movies/MoviesForm";
import MoviesList from "./components/movies/MoviesList";
import Card from "./components/UI/Card/Card";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-e25a5-default-rtdb.firebaseio.com/moviesPractice.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong😢");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].date,
        });
      }

      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const formInputsHandler = async (movie) => {
    const response = await fetch(
      "https://react-http-e25a5-default-rtdb.firebaseio.com/moviesPractice.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  let content = <p>Found no movies, Please add one!😊</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading!😋</p>;
  }

  return (
    <div>
      <MoviesForm onAddMovie={formInputsHandler} />
      <FetchMovies fetchedMovies={fetchMoviesHandler} />
      <Card>{content}</Card>
    </div>
  );
}

export default App;
