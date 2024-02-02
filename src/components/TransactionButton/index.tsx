import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

export interface TransactionButtonProps extends RectButtonProps {
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
    <S.Container isActive={isActive} type={type}>
      <S.Button {...rest}>
        <S.Icon name={icons[type]} type={type} />
        <S.Title isActive={isActive} type={type}>
          {title}
        </S.Title>
      </S.Button>
    </S.Container>
  );
}
