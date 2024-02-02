import { Control, Controller } from "react-hook-form";

import { Input, InputProps } from "../Input";

import * as S from "./styles";

interface InputControlledProps extends InputProps {
  control: Control;
  name: string;
  error: string | undefined;
}

export function InputControlled({
  control,
  name,
  error,
  ...rest
}: InputControlledProps) {
  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      ></Controller>

      {error && <S.Erro>{error}</S.Erro>}
    </S.Container>
  );
}
