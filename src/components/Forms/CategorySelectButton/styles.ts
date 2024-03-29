import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton).attrs({
  activeOpacity: Number(0.7),
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;

    padding: 18px 16px;
  `}
`;
export const Category = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;
export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(20)}px;
  `}
`;
