import styled from "styled-components";

import { ReactComponent as Search } from "../design-system/assets/search.svg";
import { colors } from "../design-system/theme";

export const InputWrapper = styled.div`
  box-sizing: border-box;
  max-height: 4rem;
  width: 100%;
  padding: 1rem;
  background: ${colors.baseColor};
  border-radius: 10px;
  border: 0.5px solid ${colors.lightestGrey};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 18rem;
  }
`;

export const SearchIcon = styled(Search)`
  width: 1rem;
  height: 1rem;
  margin-right: 4px;
  color: ${colors.darkGrey};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 14px;
  color: ${colors.lightGrey};
  outline: none;
  background: ${colors.baseColor};
  &:focus {
    ${InputWrapper} {
      border: 0.5px solid ${colors.lightBlue};
    }
    ${SearchIcon} {
      color: ${colors.lightBlue};
    }
  }
`;
