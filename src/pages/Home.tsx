import React from "react";
import "../Home.css";
import PhotographyLink from "../components/PhotographyLink";
import { CreditsLink } from "./Credits";

const Home = () => {
  return (
    <div>
      <PhotographyLink />
      <CreditsLink />
    </div>
  );
};

export default Home;
