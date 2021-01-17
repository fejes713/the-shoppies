import React, { useContext } from "react";

import { Nominee as TNominee, NomineesContext } from "../../contexts/nominees";
import Poster from "../../design-system/components/Poster";
import { Container, Title, Year } from "./Nominee.styled";

interface INomineeProps {
  nominee: TNominee;
}

const Nominee = ({ nominee }: INomineeProps) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    NomineesContext
  );
  const { imdbID, Title: title, Year: year, Poster: poster } = nominee;

  const isFavorite = favorites.filter((n) => n.imdbID === imdbID).length === 1;

  const handleClick = () => {
    isFavorite ? removeFromFavorites(imdbID) : addToFavorites(nominee);
  };

  return (
    <Container onClick={handleClick}>
      <Poster src={poster} />
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  );
};

export default Nominee;
