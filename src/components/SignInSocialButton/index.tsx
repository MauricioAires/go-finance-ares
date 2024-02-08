import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import * as S from "./style";

export interface SignInSocialButtonProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
}

export function SignInSocialButton({
  icon: Icon,
  title,
  ...rest
}: SignInSocialButtonProps) {
  return (
    <S.Container {...rest}>
      <S.IconContainer>
        <Icon />
      </S.IconContainer>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
