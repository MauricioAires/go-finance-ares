import * as S from "./styles";

export interface HistoryCardProps {
  color: string;
  title: string;
  amount: string;
}

export function HistoryCard({ amount, color, title }: HistoryCardProps) {
  return (
    <S.Container color={color}>
      <S.Title>{title}</S.Title>
      <S.Amount>{amount}</S.Amount>
    </S.Container>
  );
}
