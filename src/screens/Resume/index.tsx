import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

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
  const [transactionResume, setTransactionResume] = useState<CategoryCard[]>(
    [] as CategoryCard[],
  );

  const theme = useTheme();
  const bottomTabBarHeight = useBottomTabBarHeight();

  async function loadTransactions() {
    const collectionKey = "@goFinances:transactions";
    const response = await AsyncStorage.getItem(collectionKey);
    const currentTransactions: Transaction[] = response
      ? JSON.parse(response!)
      : [];

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
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
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
      </S.Content>
    </S.Container>
  );
}
