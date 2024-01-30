import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const TouchableOpacityContainer = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;

    justify-content: center;
    align-items: center;

    padding: 18px;

    background-color: ${theme.colors.secondary};

    border-radius: 5px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.medium};

    font-size: ${RFValue(14)}px;
  `}
`;
