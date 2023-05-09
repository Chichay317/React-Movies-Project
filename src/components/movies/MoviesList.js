import Card from "../UI/Card/Card";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <Card>
      <ul className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
          />
        ))}
      </ul>
    </Card>
  );
};

export default MoviesList;
