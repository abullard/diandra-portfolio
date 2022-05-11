import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const CreditsLink = () => {
  return (
    <Link to="credits" aria-label="go-to-credits">
      <CreditsContainer>
        <h1>Credits</h1>
      </CreditsContainer>
    </Link>
  );
};

// AJB: TODO;
const Credits = () => {
  return (
    <div>
      <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>;
    </div>
  );
};

const CreditsContainer = styled.div`
  position: absolute;
  padding-right: 1rem;
  right: 0;
  bottom: 0;
  font-family: futura;
  font-size: 12px;
`;

export default Credits;
