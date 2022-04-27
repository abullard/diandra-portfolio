import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import HOME_PHOTO from "../assets/photos/home.jpeg";
import HOME_LIGHTENED_PHOTO from "../assets/photos/home_lightened.jpeg";
import OFFICE_PHOTO from "../assets/photos/office.jpeg";
import OFFICE_LIGHTENED_PHOTO from "../assets/photos/office_lightened.jpeg";

const PhotographyLink = () => {
  const [hovered, setHovered] = useState<Boolean>(false);
  const [imgOneSource, setImgOneSource] =
    useState<string>(HOME_LIGHTENED_PHOTO);
  const [imgTwoSource, setImgTwoSource] = useState<string>(
    OFFICE_LIGHTENED_PHOTO
  );

  useEffect(() => {
    if (hovered) {
      setImgOneSource(HOME_PHOTO);
      setImgTwoSource(OFFICE_PHOTO);
    } else {
      setImgOneSource(HOME_LIGHTENED_PHOTO);
      setImgTwoSource(OFFICE_LIGHTENED_PHOTO);
    }
  }, [hovered]);

  return (
    <Link to="photography">
      <PhotographyImageContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <PhotographyImage1 src={imgOneSource} />
        <PhotographyImage2 src={imgTwoSource} />
      </PhotographyImageContainer>
    </Link>
  );
};

const PhotographyImage1 = (props: any) => {
  return <img height={200} width={350} src={props.src} />;
};

const PhotographyImage2 = (props: any) => {
  return <img height={200} width={150} src={props.src} />;
};

const PhotographyImageContainer = styled.div`
  padding: 1rem;
  display: inline-block;
`;

export default PhotographyLink;
