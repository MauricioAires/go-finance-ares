import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
  `}
`;
export const Form = styled.View`
  flex: 1;

  width: 100%;
  padding: 20px 16px;

  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionType = styled.View`
  flex-direction: row;
  max-width: 100%;

  padding: 16px 0;

  gap: 8px;
`;
