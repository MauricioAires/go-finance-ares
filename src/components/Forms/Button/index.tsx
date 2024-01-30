import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.TouchableOpacityContainer {...rest}>
      <S.Title>{title}</S.Title>
    </S.TouchableOpacityContainer>
  );
}
