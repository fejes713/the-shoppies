import styled from "styled-components";

import { colors } from "../theme";

interface IPosterContainer {
  src: string;
  small?: boolean;
}

const PosterImage = styled.div<IPosterContainer>`
  width: 10rem;
  height: 14rem;
  border-radius: 10px;

  background-image: url(${(props) => props.src});
  background-color: ${colors.lightestGrey};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.small ? "6rem" : "12rem")};
    height: ${(props) => (props.small ? "8rem" : "16rem")};
  }
`;

const NoPosterLabel = styled.span`
  color: ${colors.lightGrey};
  font-size: 11px;
  text-align: center;
`;

const Poster = ({ src, small }: IPosterContainer) => (
  <PosterImage src={src} small={small}>
    {src === "N/A" && <NoPosterLabel>Poster not available</NoPosterLabel>}
  </PosterImage>
);

export default Poster;
