import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    height: ${RFValue(56)}px;
    background-color: ${theme.colors.shape};

    flex-direction: row;
    align-items: center;

    border-radius: 5px;

    gap: 10px;
  `}
`;

export const IconContainer = styled.View`
  ${({ theme }) => css`
    height: 100%;
    justify-content: center;
    align-items: center;

    padding: ${RFValue(16)}px;
    border-color: ${theme.colors.background};
    border-right-width: 1px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    text-align: center;
    padding: ${RFValue(14)}px;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.medium};
  `}
`;
