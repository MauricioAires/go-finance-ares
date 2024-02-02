import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardItem,
} from "../../components/TransactionCard";

import * as S from "./styles";

export function Dashboard() {
  const transactions: TransactionCardItem[] = [
    {
      id: "1",
      type: "positive",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      createdAt: "13/04/2020",
      title: "Desenvolvimento de site",
    },
    {
      id: "2",
      type: "negative",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      createdAt: "13/04/2020",
      title: "Hamburgueria Pizzy",
    },
    {
      id: "3",
      type: "negative",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      createdAt: "13/04/2020",
      title: "Aluguel do apartamento",
    },
  ];
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: "https://github.com/MauricioAires.png",
              }}
            />
            <S.User>
              <S.UserGreeting>Olá,</S.UserGreeting>
              <S.UserName>Mauricio</S.UserName>
            </S.User>
          </S.UserInfo>

          <S.LogoutButton>
            <S.Icon name="power" />
          </S.LogoutButton>
        </S.UserWrapper>
      </S.Header>
      <S.HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Transactions</S.Title>

        <S.TransactionsList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard props={item} />}
        />
      </S.Transactions>
    </S.Container>
  );
}
