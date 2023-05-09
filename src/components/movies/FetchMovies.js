import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const FetchMovies = (props) => {
  return (
    <Card>
      <Button onClick={props.fetchedMovies}>Fetch Movies</Button>
    </Card>
  );
};

export default FetchMovies;
