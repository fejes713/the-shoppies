import styled from "styled-components";

export const NomineesSection = styled.section`
  grid-area: nominees;
  height: 100%;
`;

export const NomineesContainer = styled.section`
  width: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-template-rows: repeat(auto-fill, 14rem);
  gap: 1rem;
  justify-content: space-between;
  padding-inline: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 12rem);
    grid-template-rows: repeat(auto-fill, 20rem);
  }
`;

export const Loading = styled.span``;
