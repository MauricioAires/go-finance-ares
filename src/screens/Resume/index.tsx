import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { categories } from "../../utils/categories";
import { currencyFormatter } from "../../utils/formatters/currency-formatter";

import { HistoryCard } from "../../components/HistoryCard";

import * as S from "./styles";

export type TransactionVariantType = "income" | "outcome";

interface CategoryCard {
  color: string;
  title: string;
  total: string;
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
    let totalByCategory: CategoryCard[] = [];

    categories.forEach(async (category) => {
      let categorySum = 0;

      currentTransactions.forEach((element) => {
        if (element.category === category.key) {
          categorySum += Number(element.amount);
        }
      });

      if (categorySum > 0) {
        totalByCategory.push({
          title: category.name,
          color: category.color,
          total: currencyFormatter(categorySum),
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

      <S.Content>
        <S.CategoriesList>
          {transactionResume.map((category) => (
            <HistoryCard
              key={category.title}
              title={category.title}
              amount={category.total}
              color={category.color}
            />
          ))}
        </S.CategoriesList>
      </S.Content>
    </S.Container>
  );
}
