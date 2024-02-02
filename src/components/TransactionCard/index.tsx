import { categories } from "../../utils/categories";
import * as S from "./styles";

export type TransactionCardVariantType = "income" | "outcome";
export interface TransactionCardItem {
  id: string;
  type: TransactionCardVariantType;
  title: string;
  amount: string;
  categoryKey: string;
  createdAt: string;
}

export interface TransactionCardProps {
  props: TransactionCardItem;
}

export function TransactionCard({
  props: { amount, categoryKey, createdAt, title, type },
}: TransactionCardProps) {
  const [category] = categories.filter((item) => item.key === categoryKey);

  return (
    <S.Container>
      <S.Title> {title} </S.Title>
      <S.Amount type={type}>
        {type === "outcome" && "- "}
        {amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={category.icon} />
          <S.CategoryName>{category.name}</S.CategoryName>
        </S.Category>

        <S.Date>{createdAt}</S.Date>
      </S.Footer>
    </S.Container>
  );
}
