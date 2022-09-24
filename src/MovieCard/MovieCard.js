import React from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Inputtag from "../Component/Inputtag";

export default class MovieCard extends React.Component {
  constructor(props) {
    console.log("MovieCard - constructor");
    super(props);
    this.query = this.props.movieQuery;
    this.state = {
      moviesResponse: {},
      input: " ",
      filterData: {},
    };
  }

  componentDidMount() {
    console.log("MovieCard - componentDidMount");
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((res) => {
        const moviesResponse = res.data;
        this.setState({
          moviesResponse,
        });
      });
  }
  componentDidUpdate() {
    console.log("MovieCard - componentDidUpdate");
    if (this.props.movieQuery.length > 0) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716" +
            "&query=" +
            this.props.movieQuery
        )
        .then((res) => {
          const moviesResponse = res.data;
          this.setState({
            moviesResponse,
          });
        });
    } else {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
        )
        .then((res) => {
          const moviesResponse = res.data;
          this.setState({
            moviesResponse,
          });
        });
    }
  }
  render() {
    console.log("MovieCard - render");
    return (
      <>
      <Inputtag/>
      <div className={styles.CardDiv}>
        {this.state.moviesResponse?.results?.map((movie) => (
          <div className={styles.SubCardDiv}>
            <img
              className={styles.imgTag}
              src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
              alt={movie.original_title}
            />
            <p className={styles.movieTitle}>{movie.title}</p>
          </div>
        ))}
      </div>
      </>
    );
  }
}
