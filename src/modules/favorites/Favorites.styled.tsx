import styled from "styled-components";
import { colors } from "../design-system/theme";

import { ReactComponent as MovieIcon } from "../design-system/assets/video.svg";
import { ReactComponent as StarIcon } from "../design-system/assets/star.svg";

export const FavoritesSection = styled.aside`
  grid-area: favorites;
  padding: 0rem 2rem;
  width: 20rem;
  border-right: 1px solid ${colors.lightestGrey};
  margin-bottom: 2rem;
`;

export const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: ${colors.black};
`;

export const Star = styled(StarIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${colors.darkGrey};
  position: relative;
`;

export const EmptySection = styled.div`
  margin-top: 5rem;
  border-radius: 20px;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptySectionIcon = styled(MovieIcon)`
  color: ${colors.darkGrey};
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
`;

export const EmptySectionLabel = styled.span`
  color: ${colors.darkGrey};
  font-size: 12px;
  text-align: center;
`;

export const NomineeContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  width: 100%;
`;
