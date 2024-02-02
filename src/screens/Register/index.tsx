import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Forms/Button";
import { TransactionButton } from "../../components/TransactionButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { InputControlled } from "../../components/Forms/InputControlled";
import { CategorySelect } from "../CategorySelect";

import * as S from "./styles";

type TransactionType = "income" | "outcome";

interface FormData {
  name: string;
  amount: number;
}

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("Preço é obrigatório"),
});

export function Register() {
  const [transactionType, setTransactionType] =
    useState<TransactionType>("income");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Category",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
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

  function handleRegister(form: FormData) {
    if (category.key === "category") {
      return Alert.alert("Atenção", "Selecione uma categoria");
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputControlled
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name?.message}
            />
            <InputControlled
              control={control}
              name="amount"
              placeholder="Preço"
              autoCapitalize="words"
              keyboardType="numeric"
              error={errors.amount?.message}
            />

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

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </S.Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            closeSelect={() => handleCloseModal()}
            setCategory={setCategory}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
