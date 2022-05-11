import React from "react";
import { Link } from "react-router-dom";

const Credits = () => {
  return (
    <Link to="credits" aria-label="go-to-credits">
      <div>
        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>;
      </div>
    </Link>
  );
};

export default Credits;
