import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PhotographyLink = () => {
  return (
    <Link to="photography">
      <img
        height={200}
        width={350}
        src={require("../assets/photos/home_lightened.jpeg")}
        onMouseEnter={(e) =>
          (e.currentTarget.src = require("../assets/photos/home.jpeg"))
        }
        onMouseLeave={(e) =>
          (e.currentTarget.src = require("../assets/photos/home_lightened.jpeg"))
        }
      />
    </Link>
  );
};

export default PhotographyLink;
