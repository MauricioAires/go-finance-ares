import * as S from "./styles";

type Category = {
  name: string;
  icon: string;
};

export type TransactionCardVariantType = "positive" | "negative";

export interface TransactionCardItem {
  id: string;
  type: TransactionCardVariantType;
  title: string;
  amount: string;
  category: Category;
  createdAt: string;
}

export interface TransactionCardProps {
  props: TransactionCardItem;
}

export function TransactionCard({
  props: { amount, category, createdAt, title, type },
}: TransactionCardProps) {
  return (
    <S.Container>
      <S.Title> {title} </S.Title>
      <S.Amount type={type}>
        {type === "negative" && "- "}
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
