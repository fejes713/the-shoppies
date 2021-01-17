import React, { useContext } from "react";

import { NomineesContext } from "../contexts/nominees";

import { NomineesSection, NomineesContainer } from "./Nominees.styled";
import Nominee from "./components/Nominee";

const Nominees = () => {
  const { searchedNominees } = useContext(NomineesContext);

  if (!searchedNominees) return null;

  return (
    <NomineesSection>
      <NomineesContainer>
        {searchedNominees.map((nominee) => (
          <Nominee nominee={nominee} />
        ))}
      </NomineesContainer>
    </NomineesSection>
  );
};

export default Nominees;
