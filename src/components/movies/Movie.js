import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.openingText}</h3>
      <p>{props.releaseDate}</p>
    </li>
  );
};

export default Movie;
