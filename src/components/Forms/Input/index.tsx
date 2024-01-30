import { TextInputProps } from "react-native";

import * as S from "./styles";

export interface InputProps extends TextInputProps {}

export function Input({ ...rest }: InputProps) {
  return <S.Input {...rest} />;
}
