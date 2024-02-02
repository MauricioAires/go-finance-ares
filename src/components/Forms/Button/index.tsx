import { RectButtonProps } from "react-native-gesture-handler";
import * as S from "./styles";

export interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ onPress, title, ...rest }: ButtonProps) {
  return (
    <S.Container onPress={onPress} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
