import { TextInput, ColorValue } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.colors.text as ColorValue,
}))`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px 18px;
    font-size: ${RFValue(14)}px;

    background-color: ${theme.colors.shape};
    border-radius: 5px;

    margin-bottom: 8px;

    font-family: ${theme.fonts.regular};
    color: ${theme.colors.title};
  `}
`;
