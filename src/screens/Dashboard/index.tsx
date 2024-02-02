import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardItem,
} from "../../components/TransactionCard";

import * as S from "./styles";
import { useTheme } from "styled-components";

interface Total {
  amount: string;
}

interface HighlightData {
  entries: Total;
  expensive: Total;
  total: Total;
}

function currencyFormat(value: number) {
  return Number(value)
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .toString();
}

export function Dashboard() {
  const collectionKey = "@goFinances:transactions";

  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();
  const [transactions, setTransactions] = useState([] as TransactionCardItem[]);
  const [highlightData, setHighlightData] = useState({} as HighlightData);

  async function loadTransactions() {
    setIsLoading(true);
    const data = await AsyncStorage.getItem(collectionKey);

    const currentTransactions = data ? JSON.parse(data!) : [];

    let entriesSumTotal = 0;
    let expensiveTotal = 0;

    const mapperTransactions: TransactionCardItem[] = currentTransactions.map(
      (transaction: any) => {
        if (transaction.transactionType === "income") {
          entriesSumTotal += transaction.amount;
        } else {
          expensiveTotal += transaction.amount;
        }

        const amount = currencyFormat(transaction.amount);

        const date = new Date(transaction.createdAt);
        const createdAt = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(date);

        return {
          id: transaction.id,
          categoryKey: transaction.category,
          title: transaction.name,
          type:
            transaction.transactionType === "income" ? "positive" : "negative",
          amount,
          createdAt,
        };
      },
    );

    setTransactions(mapperTransactions);
    setHighlightData({
      entries: {
        amount: currencyFormat(entriesSumTotal),
      },
      expensive: {
        amount: currencyFormat(expensiveTotal),
      },
      total: {
        amount: currencyFormat(entriesSumTotal - expensiveTotal),
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadContainer>
          <ActivityIndicator color={colors.primary} size="large" />
        </S.LoadContainer>
      ) : (
        <>
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
              amount={highlightData.entries?.amount}
              lastTransaction="Última entrada dia 13 de abril"
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expensive?.amount}
              lastTransaction="Última entrada dia 13 de abril"
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total?.amount}
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
        </>
      )}
    </S.Container>
  );
}
