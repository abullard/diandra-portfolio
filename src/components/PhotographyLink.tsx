import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import HOME_PHOTO from "../assets/photos/home.jpeg";
import HOME_LIGHTENED_PHOTO from "../assets/photos/home_lightened.jpeg";
import OFFICE_PHOTO from "../assets/photos/office.jpeg";
import OFFICE_LIGHTENED_PHOTO from "../assets/photos/office_lightened.jpeg";

const PhotographyLink = () => {
  const [hovered, setHovered] = useState<Boolean>(false);
  const [linkText, setLinkText] = useState<string>("Photography");
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
      setLinkText("Photography");
    }
  }, [hovered]);

  return (
    <Link to="photography">
      <PhotographyImageContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <PhotographyHeader>{linkText}</PhotographyHeader>
        <PhotographyImage src={imgOneSource} height={200} width={350} />
        <PhotographyImage src={imgTwoSource} height={200} width={150} />
      </PhotographyImageContainer>
    </Link>
  );
};

const PhotographyImage = (props: any) => {
  return <img height={props.height} width={props.width} src={props.src} />;
};

const PhotographyHeader = styled.h1`
  position: absolute;
`;

const PhotographyImageContainer = styled.div`
  padding: 1rem;
  max-height: 200px;
  max-width: 50vw;
`;

export default PhotographyLink;
