import { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionButton } from "../../components/TransactionButton";
import * as S from "./styles";

type TransactionType = "income" | "outcome";

export function Register() {
  const [transactionType, setTransactionType] =
    useState<TransactionType>("income");

  function handleTransactionType(type: TransactionType) {
    setTransactionType(type);
  }
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <S.TransactionType>
            <TransactionButton
              isActive={transactionType === "income"}
              title="Income"
              type="up"
              onPress={() => handleTransactionType("income")}
            />
            <TransactionButton
              isActive={transactionType === "outcome"}
              title="Outcome"
              type="down"
              onPress={() => handleTransactionType("outcome")}
            />
          </S.TransactionType>
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  );
}
