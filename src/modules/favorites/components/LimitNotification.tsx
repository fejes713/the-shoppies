import React, { useContext } from "react";
import { NomineesContext } from "../../contexts/nominees";

import styled from "styled-components";

import { colors } from "../../design-system/theme";

const Container = styled.div`
  grid-area: notifications;
  align-self: end;
  background: ${colors.lightestBlue};
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  margin-left: 2rem;
`;

const Text = styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: ${colors.blue};
`;

const MAX_NOMINEES = 5;

const LimitNotification = () => {
  const { favorites } = useContext(NomineesContext);

  const limitReached = favorites.length >= MAX_NOMINEES;

  if (!limitReached) return null;

  const notificationText = `Congrats! You've nominated ${MAX_NOMINEES} movies!`;

  return (
    <Container>
      <Text>{notificationText}</Text>
    </Container>
  );
};

export default LimitNotification;
