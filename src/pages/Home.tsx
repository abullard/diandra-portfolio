import React from "react";
import "../Home.css";
import PhotographyLink from "../components/PhotographyLink";
import Credits from "./Credits";

const Home = () => {
  return (
    <div>
      <PhotographyLink />
      <Credits />
    </div>
  );
};

export default Home;
