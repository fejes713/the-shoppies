import Confetti, { ConfettiConfig } from "react-dom-confetti";
import React, { useContext } from "react";

import { NomineesContext } from "../contexts/nominees";
import FavoritePreview from "./components/FavoritePreview";

import {
  FavoritesSection,
  SectionTitle,
  EmptySection,
  EmptySectionIcon,
  EmptySectionLabel,
  NomineeContainer,
  SectionTitleContainer,
  Star,
} from "./Favorites.styled";

const confettiConfiguration: ConfettiConfig = {
  angle: 236,
  spread: 360,
  startVelocity: 34,
  elementCount: 100,
  dragFriction: 0.17,
  duration: 4390,
  stagger: 2,
  width: "8px",
  height: "8px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const Favorites = () => {
  const { favorites } = useContext(NomineesContext);

  const isCompleted = favorites.length === 5;

  return (
    <FavoritesSection>
      <SectionTitleContainer>
        <SectionTitle>Nominated Movies</SectionTitle>
        <Star />
      </SectionTitleContainer>
      <Confetti active={isCompleted} config={confettiConfiguration} />
      {favorites.length === 0 ? (
        <EmptySection>
          <EmptySectionIcon />
          <EmptySectionLabel>
            Ooops, your list is empty. Start by searching for your favorite
            movies!
          </EmptySectionLabel>
        </EmptySection>
      ) : (
        <NomineeContainer>
          {favorites.map((nominee) => (
            <FavoritePreview nominee={nominee} />
          ))}
        </NomineeContainer>
      )}
    </FavoritesSection>
  );
};

export default Favorites;
