import styled from "styled-components";

import { colors } from "./modules/design-system/theme";

export const AppContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  max-width: 100vw;
  background-color: ${colors.baseColor};
  padding: 2rem 1rem 0rem;
  display: grid;
  grid-template-areas:
    "header"
    "nominees"
    "favorites";

  @media screen and (min-width: 768px) {
    grid-template-columns: 24rem 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "logo header"
      "favorites nominees";
  }
`;
