import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
/**
 * Preservar as funcionalidades dos botões dentro de um modal
 */
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.background};
  `}
`;
export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

interface CategoryProps {
  isActive: boolean;
}

export const Category = styled.TouchableOpacity<CategoryProps>`
  ${({ theme, isActive }) => css`
    width: 100%;

    padding: ${RFValue(15)}px;
    flex-direction: row;

    gap: 16px;

    background-color: ${isActive
      ? theme.colors.secondary_light
      : theme.colors.background};
  `}
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(20)}px;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.text};
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 24px;
  `}
`;
