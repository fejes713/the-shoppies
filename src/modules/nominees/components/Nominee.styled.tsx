import styled from "styled-components";

import { colors } from "../../design-system/theme";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
`;

export const Title = styled.span`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 8px 0px;
  color: ${colors.black};
  text-align: center;
`;

export const Year = styled.span`
  color: ${colors.darkGrey};
  font-size: 12px;
  text-align: center;
`;
