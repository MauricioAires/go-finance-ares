import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

export interface TransactionButtonProps extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

export function TransactionButton({
  isActive,
  type,
  title,
  ...rest
}: TransactionButtonProps) {
  const icons = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
  };

  return (
    <S.Container {...rest} isActive={isActive} type={type}>
      <S.Icon name={icons[type]} type={type} />
      <S.Title isActive={isActive} type={type}>
        {title}
      </S.Title>
    </S.Container>
  );
}
