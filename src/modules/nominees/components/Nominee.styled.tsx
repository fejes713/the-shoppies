import styled, { css } from "styled-components";

import { colors } from "../../design-system/theme";

interface IContainer {
  isFavorite: boolean;
}

export const Container = styled.a<IContainer>`
  --color-title: ${colors.black};
  --color-year: ${colors.darkGrey};

  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;

  ${(props) =>
    props.isFavorite &&
    css`
      --color-title: ${colors.lightGrey};
      --color-year: ${colors.lightGrey};
      filter: grayscale(100%);
    `};
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
  color: var(--color-title);
  text-align: center;
`;

export const Year = styled.span`
  color: var(--color-year);
  font-size: 12px;
  text-align: center;
`;
