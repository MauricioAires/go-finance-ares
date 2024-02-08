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
export const Content = styled.ScrollView`
  padding: 24px;
  flex: 1;
`;

export const CategoriesList = styled.View`
  gap: 6px;
`;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const Month = styled.View``;
export const MonthSelect = styled.View``;
export const MonthSelectButton = styled.View``;
export const SelectIcon = styled.View``;
