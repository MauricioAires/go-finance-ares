import { Control, Controller } from "react-hook-form";

import { Input, InputProps } from "../Input";

import * as S from "./styles";

interface InputControlledProps extends InputProps {
  control: Control;
  name: string;
}

export function InputControlled({
  control,
  name,
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
    </S.Container>
  );
}
