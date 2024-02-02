import styled, { DefaultTheme, css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TransactionCardVariantType } from ".";

interface TransactionTypeProps {
  type: TransactionCardVariantType;
}

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    border-radius: 5px;
    padding: 18px 24px;

    margin-bottom: 16px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-left: -4px;
  `}
`;

const amountModifiers = {
  color: {
    income: (theme: DefaultTheme) => css`
      color: ${theme.colors.success};
    `,
    outcome: (theme: DefaultTheme) => css`
      color: ${theme.colors.attention};
    `,
  },
};

export const Amount = styled.Text<TransactionTypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    margin-top: 2px;
    font-size: ${RFValue(20)}px;

    ${amountModifiers.color[type](theme)}
  `}
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 19px;
  justify-content: space-between;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(14)}px;
  `}
`;

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
    margin-left: 10px;
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(14)}px;
  `}
`;
