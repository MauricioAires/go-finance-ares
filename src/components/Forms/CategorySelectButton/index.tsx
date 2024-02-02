import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

export interface CategorySelectProps extends RectButtonProps {
  title: string;
}

export function CategorySelectButton({ title, ...rest }: CategorySelectProps) {
  return (
    <S.Container {...rest}>
      <S.Category>{title}</S.Category>

      <S.Icon name="chevron-down" />
    </S.Container>
  );
}
