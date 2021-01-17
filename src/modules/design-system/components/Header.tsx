import styled from "styled-components";

import { colors } from "../theme";

const HeaderContainer = styled.header`
  grid-area: header;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const Logo = styled.h1`
  margin-bottom: 1rem;
  color: ${colors.black};
  text-align: center;
`;

const Header: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <Logo>The Shoppies</Logo>
      {children}
    </HeaderContainer>
  );
};

export default Header;
