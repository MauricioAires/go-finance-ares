import styled, { css, DefaultTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { HighlightCardType } from ".";

interface HighlightCardProps {
  type: HighlightCardType;
}

export const Container = styled.View<HighlightCardProps>`
  ${({ theme, type }) => css`
    width: ${RFValue(300)}px;
    border-radius: 5px;

    margin-right: 16px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;

    ${type === "total"
      ? css`
          background-color: ${theme.colors.secondary};
        `
      : css`
          background-color: ${theme.colors.shape};
        `}
  `}
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<HighlightCardProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};

    font-size: ${RFValue(13)}px;

    ${type === "total"
      ? css`
          color: ${theme.colors.shape};
        `
      : css`
          color: ${theme.colors.title};
        `}
  `}
`;

const iconModifiers = {
  color: {
    up: (theme: DefaultTheme) => css`
      color: ${theme.colors.success};
    `,
    down: (theme: DefaultTheme) => css`
      color: ${theme.colors.attention};
    `,
    total: (theme: DefaultTheme) => css`
      color: ${theme.colors.shape};
    `,
  },
};

export const Icon = styled(Feather)<HighlightCardProps>`
  ${({ theme, type }) => css`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(40)}px;

    ${iconModifiers.color[type](theme)}
  `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<HighlightCardProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    margin-top: 38px;

    ${type === "total"
      ? css`
          color: ${theme.colors.shape};
        `
      : css`
          color: ${theme.colors.title};
        `}
  `}
`;

export const LastTransaction = styled.Text<HighlightCardProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.title};

    ${type === "total"
      ? css`
          color: ${theme.colors.shape};
        `
      : css`
          color: ${theme.colors.title};
        `}
  `}
`;
