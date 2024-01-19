import React from "react";
import MovieNavBar from "../components/navbar/MovieNavBarComponent";

const MovieLayoutHoc =
  (Component) =>
  (...props) => {
    return (
      <>
        <MovieNavBar></MovieNavBar>
        <Component {...props} />
      </>
    );
  };

export default MovieLayoutHoc;
