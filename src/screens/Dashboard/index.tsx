import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardItem,
} from "../../components/TransactionCard";
import { dateFormatter } from "../../utils/formatters/date-formatter";
import { currencyFormatter } from "../../utils/formatters/currency-formatter";
import { lastTransactionMapper } from "../../utils/mappers/last-transaction-mapper";

import * as S from "./styles";

interface Total {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  entries: Total;
  expensive: Total;
  total: Total;
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

    const currentTransactions = data
      ? (JSON.parse(data!) as TransactionCardItem[])
      : [];

    let entriesSumTotal = 0;
    let expensiveTotal = 0;

    const mapperTransactions: TransactionCardItem[] = currentTransactions.map(
      (transaction: any) => {
        if (transaction.type === "income") {
          entriesSumTotal += transaction.amount;
        } else {
          expensiveTotal += transaction.amount;
        }

        const amount = currencyFormatter(transaction.amount);

        const date = new Date(transaction.createdAt);

        const createdAt = dateFormatter(date);

        return {
          id: transaction.id,
          categoryKey: transaction.category,
          title: transaction.name,
          type: transaction.type,
          amount,
          createdAt,
        };
      },
    );

    setTransactions(mapperTransactions);

    const lastTransactionIncome = lastTransactionMapper({
      transactions: currentTransactions,
      type: "income",
    });

    const lastTransactionOutcome = lastTransactionMapper({
      transactions: currentTransactions,
      type: "outcome",
    });

    setHighlightData({
      entries: {
        amount: currencyFormatter(entriesSumTotal),
        lastTransaction: `Última entrada ${lastTransactionIncome}`,
      },
      expensive: {
        amount: currencyFormatter(expensiveTotal),
        lastTransaction: `Última saída ${lastTransactionOutcome}`,
      },
      total: {
        amount: currencyFormatter(entriesSumTotal - expensiveTotal),
        lastTransaction: `01 á ${lastTransactionOutcome}`,
      },
    });

    setIsLoading(false);
  }

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
              lastTransaction={highlightData.entries?.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expensive?.amount}
              lastTransaction={highlightData.expensive?.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total?.amount}
              lastTransaction={highlightData.total?.lastTransaction}
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
