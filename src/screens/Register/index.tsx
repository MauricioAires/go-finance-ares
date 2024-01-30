import { Modal } from "react-native";
import { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionButton } from "../../components/TransactionButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import * as S from "./styles";
import { CategorySelect } from "../CategorySelect";

type TransactionType = "income" | "outcome";

export function Register() {
  const [transactionType, setTransactionType] =
    useState<TransactionType>("income");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Category",
  });

  function handleTransactionType(type: TransactionType) {
    setTransactionType(type);
  }

  function handleCloseModal() {
    setCategoryModalOpen(false);
  }
  function handleOpenModal() {
    setCategoryModalOpen(true);
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
          <CategorySelectButton
            onPress={() => handleOpenModal()}
            title={category.name}
          />
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          closeSelect={() => handleCloseModal()}
          setCategory={setCategory}
        />
      </Modal>
    </S.Container>
  );
}
