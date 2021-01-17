import styled from "styled-components";

import { ReactComponent as DeleteIcon } from "../../design-system/assets/delete.svg";
import { colors } from "../../design-system/theme";

export const DeleteButton = styled(DeleteIcon)`
  margin-left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Details = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0px;
`;

export const Year = styled.span`
  color: ${colors.darkGrey};
  font-size: 12px;
  margin-top: 8px;
`;
