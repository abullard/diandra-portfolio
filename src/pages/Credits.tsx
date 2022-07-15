import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Colors } from "../utils/Colors";

export const CreditsLink = () => {
  return (
    <Link to="credits" aria-label="go-to-credits">
      <CreditsContainer>
        <CreditsLinkText>Credits</CreditsLinkText>
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
`;

const CreditsLinkText = styled.h1`
  font-size: 20px;
  color: ${Colors.LIGHT_GRAY};

  :hover {
    color: ${Colors.GRAY};
  }
`;

export default Credits;
