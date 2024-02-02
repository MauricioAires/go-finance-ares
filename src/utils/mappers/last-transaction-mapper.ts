import { dateFormatter } from "../formatters/date-formatter";

type TransactionType = "income" | "outcome";

type Transaction = {
  type: TransactionType;
  createdAt: string;
};

interface lastTransactionProps {
  transactions: Transaction[];
  type: TransactionType;
}

export function lastTransactionMapper({
  transactions,
  type,
}: lastTransactionProps) {
  const timesTransactions = transactions
    .filter((item) => item.type === type)
    .map((item) => new Date(item.createdAt).getTime());

  const lastTransactionsEntries = dateFormatter(
    new Date(Math.max.apply(Math, timesTransactions)),
  );

  return lastTransactionsEntries;
}
