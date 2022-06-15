import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import HOME_PHOTO from "../assets/static_photos/home.jpeg";
import HOME_LIGHTENED_PHOTO from "../assets/static_photos/home_lightened.jpeg";
import OFFICE_PHOTO from "../assets/static_photos/office.jpeg";
import OFFICE_LIGHTENED_PHOTO from "../assets/static_photos/office_lightened.jpeg";
import { Colors } from "../utils/Colors";

const PhotographyLink = () => {
  const LINK_TEXT_CAPS = "Photography".toUpperCase();
  const [hovered, setHovered] = useState<Boolean>(false);
  const [linkText, setLinkText] = useState<string>(LINK_TEXT_CAPS);
  const [imgOneSource, setImgOneSource] =
    useState<string>(HOME_LIGHTENED_PHOTO);
  const [imgTwoSource, setImgTwoSource] = useState<string>(
    OFFICE_LIGHTENED_PHOTO
  );

  useEffect(() => {
    if (hovered) {
      setImgOneSource(HOME_PHOTO);
      setImgTwoSource(OFFICE_PHOTO);
      setLinkText("");
    } else {
      setImgOneSource(HOME_LIGHTENED_PHOTO);
      setImgTwoSource(OFFICE_LIGHTENED_PHOTO);
      setLinkText(LINK_TEXT_CAPS);
    }
  }, [hovered]);

  return (
    <Link to="photography" aria-label="go-to-photography">
      <PhotographyImageContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <PhotographyLinkTextContainer>
          <LinkText>{linkText}</LinkText>
        </PhotographyLinkTextContainer>
        <PhotographyImage src={imgOneSource} height={200} width={350} />
        <PhotographyImage src={imgTwoSource} height={200} width={150} />
      </PhotographyImageContainer>
    </Link>
  );
};

const PhotographyImage = (props: any) => {
  return <img height={props.height} width={props.width} src={props.src} />;
};

const PhotographyImageContainer = styled.div`
  padding: 1rem;
  max-height: 200px;
  max-width: 50vw;
  position: relative;
`;

const PhotographyLinkTextContainer = styled.div`
  position: absolute;
  left: 50px;
  bottom: 5px;
`;

const LinkText = styled.h1`
  text-decoration: none;
  color: ${Colors.GRAY};
  font-size: 4rem;
`;

export default PhotographyLink;
