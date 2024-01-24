import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    font-weight: bold;
    color: ${theme.colors.primary};
  `}
`;
