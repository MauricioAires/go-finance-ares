import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Erro = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.attention};
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};

    margin: 7px 0;
  `}
`;
