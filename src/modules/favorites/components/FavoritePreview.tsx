import React, { useContext } from "react";
import { Nominee, NomineesContext } from "../../contexts/nominees";
import Poster from "../../design-system/components/Poster";

import {
  Container,
  Details,
  Title,
  Year,
  DeleteButton,
} from "./FavoritePreview.styled";

interface IFavoritePreview {
  nominee: Nominee;
}

const FavoritePreview = ({ nominee }: IFavoritePreview) => {
  const { removeFromFavorites } = useContext(NomineesContext);

  const { Poster: poster, Title: title, Year: year, imdbID } = nominee;

  const onDelete = () => {
    removeFromFavorites(imdbID);
  };

  return (
    <Container>
      <Poster src={poster} small />
      <Details>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Details>
      <DeleteButton onClick={onDelete} />
    </Container>
  );
};

export default FavoritePreview;
