import React, { FC } from "react";
import { Link } from "react-router-dom";

const Landing: FC = () => {
  return (
    <>
      <h1>Landing</h1>
      <Link to="/portfolio/about">Experience the legendary</Link>
    </>
  );
};

export default Landing;
