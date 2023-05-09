import { useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./MoviesForm.module.css";
import Button from "../UI/Button/Button";

const MoviesForm = (props) => {
  const titleInputRef = useRef("");
  const openingTextInputRef = useRef("");
  const dateInputRef = useRef("");

  const submitFormHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: titleInputRef.current.value,
      openingText: openingTextInputRef.current.value,
      date: dateInputRef.current.value,
    };

    props.onAddMovie(movie);

    titleInputRef.current.value = "";
    openingTextInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="text">Title</label>
          <input id="text" type="text" ref={titleInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="text">Opening Text</label>
          <textarea
            rows="5"
            id="text"
            type="text"
            ref={openingTextInputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="date">Release Date</label>
          <input id="date" type="date" ref={dateInputRef}></input>
        </div>

        <Button>Add Movie</Button>
      </form>
    </Card>
  );
};

export default MoviesForm;
