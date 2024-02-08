import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { addMonths, format, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { ActivityIndicator } from "react-native";

import { categories } from "../../utils/categories";
import { currencyFormatter } from "../../utils/formatters/currency-formatter";

import { HistoryCard } from "../../components/HistoryCard";

import * as S from "./styles";

export type TransactionVariantType = "income" | "outcome";

interface CategoryCard {
  color: string;
  title: string;
  total: number;
  totalFormatted: string;
  percent: string;
}
export interface Transaction {
  id: string;
  type: TransactionVariantType;
  title: string;
  amount: string;
  category: string;
  createdAt: string;
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [transactionResume, setTransactionResume] = useState<CategoryCard[]>(
    [] as CategoryCard[],
  );

  const theme = useTheme();
  const bottomTabBarHeight = useBottomTabBarHeight();

  function handleDateChange(action: "next" | "prev") {
    if (action === "next") {
      return setSelectedDate((state) => addMonths(state, 1));
    }

    setSelectedDate((state) => subMonths(state, 1));
  }

  async function loadTransactions() {
    setIsLoading(true);

    const collectionKey = "@goFinances:transactions";
    const response = await AsyncStorage.getItem(collectionKey);
    const transactionParse: Transaction[] = response
      ? JSON.parse(response!)
      : [];

    const currentTransactions = transactionParse.filter((transaction) => {
      const transactionMonth = new Date(transaction.createdAt).getMonth();
      const transactionYear = new Date(transaction.createdAt).getFullYear();

      const selectMonth = new Date(selectedDate).getMonth();
      const selectedYear = new Date(selectedDate).getFullYear();
      if (
        transactionMonth === selectMonth &&
        transactionYear === selectedYear
      ) {
        return transaction;
      }
    });
    /**
     *  Como definir
     *
     * Time Complexity - O(n log n)
     * Space Complexity - O(log n)
     *
     */

    const expensiveTotal = currentTransactions.reduce(
      (acc: number, item: Transaction) => {
        return acc + Number(item.amount);
      },
      0,
    );

    let totalByCategory: CategoryCard[] = [];

    categories.forEach(async (category) => {
      let categorySum = 0;

      currentTransactions.forEach((element) => {
        if (element.category === category.key) {
          categorySum += Number(element.amount);
        }
      });

      const percent = `${((categorySum * 100) / expensiveTotal).toFixed(1)}%`;

      if (categorySum > 0) {
        totalByCategory.push({
          title: category.name,
          color: category.color,
          totalFormatted: currencyFormatter(categorySum),
          total: categorySum,
          percent: percent,
        });
      }
    });

    setTransactionResume(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [selectedDate]),
  );

  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>

      <S.Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottomTabBarHeight,
        }}
      >
        <S.MonthSelect>
          <S.MonthSelectButton onPress={() => handleDateChange("prev")}>
            <S.MonthSelectIcon name="chevron-left" />
          </S.MonthSelectButton>
          <S.Month>
            {format(selectedDate, "MMMM , yyyy", {
              locale: ptBR,
            })}
          </S.Month>
          <S.MonthSelectButton onPress={() => handleDateChange("next")}>
            <S.MonthSelectIcon name="chevron-right" />
          </S.MonthSelectButton>
        </S.MonthSelect>

        {isLoading ? (
          <S.LoadContainer>
            <ActivityIndicator color={theme.colors.primary} size="large" />
          </S.LoadContainer>
        ) : (
          <>
            <S.ChartContainer>
              <VictoryPie
                data={transactionResume}
                colorScale={transactionResume.map((category) => category.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: "bold",
                    fill: theme.colors.shape,
                  },
                }}
                labelRadius={70}
                x="percent"
                y="total"
              />
            </S.ChartContainer>
            <S.CategoriesList>
              {transactionResume.map((category) => (
                <HistoryCard
                  key={category.title}
                  title={category.title}
                  amount={category.totalFormatted}
                  color={category.color}
                />
              ))}
            </S.CategoriesList>
          </>
        )}
      </S.Content>
    </S.Container>
  );
}
