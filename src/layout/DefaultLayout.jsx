import React from "react";
import NavBar from "../components/navbar/NavBarComponent";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <NavBar />
        <Component {...props} />
        <h4>Footer</h4>
      </>
    );
  };

export default DefaultLayoutHoc;
