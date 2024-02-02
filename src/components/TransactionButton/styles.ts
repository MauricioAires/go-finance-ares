import styled, { css, DefaultTheme } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionOProps {
  type: "up" | "down";
  isActive: boolean;
}

const containerModifiers = {
  variant: {
    up: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.success_light};
      background-color: ${theme.colors.success_light};
    `,
    down: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.attention_light};
      background-color: ${theme.colors.attention_light};
    `,
  },
};

export const Container = styled.View<TransactionOProps>`
  ${({ theme, isActive, type }) => css`
    max-width: 100%;

    flex: 1;

    border: 1.5px solid ${theme.colors.text};

    border-radius: 5px;

    ${isActive && containerModifiers.variant[type](theme)}
  `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const iconModifiers = {
  color: {
    up: (theme: DefaultTheme) => css`
      color: ${theme.colors.success};
    `,
    down: (theme: DefaultTheme) => css`
      color: ${theme.colors.attention};
    `,
  },
};

export const Icon = styled(Feather)<TransactionOProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    ${iconModifiers.color[type](theme)}
  `}
`;

const titleModifiers = {
  variant: {
    up: (theme: DefaultTheme) => css`
      color: ${theme.colors.success};
    `,
    down: (theme: DefaultTheme) => css`
      color: ${theme.colors.attention};
    `,
  },
};

export const Title = styled.Text<TransactionOProps>`
  ${({ theme, isActive, type }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};

    ${isActive && titleModifiers.variant[type](theme)}
  `}
`;
