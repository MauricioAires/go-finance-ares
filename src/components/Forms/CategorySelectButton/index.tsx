import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

export interface CategorySelectProps extends TouchableOpacityProps {
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
