import * as S from "./styles";

export type HighlightCardType = "up" | "down" | "total";

export interface HighlightCardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: HighlightCardType;
}

export function HighlightCard({
  amount,
  lastTransaction,
  title,
  type,
}: HighlightCardProps) {
  // Object Literals
  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign",
  };
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon type={type} name={icon[type]} />
      </S.Header>

      <S.Footer>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Footer>
    </S.Container>
  );
}
