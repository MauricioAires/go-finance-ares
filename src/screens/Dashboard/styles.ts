import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 278px;
    background-color: ${theme.colors.primary};
  `}
`;
