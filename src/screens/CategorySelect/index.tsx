import { FlatList } from "react-native";

import { categories } from "../../utils/categories";
import { Button } from "../../components/Forms/Button";

import * as S from "./styles";

interface Category {
  key: string;
  name: string;
}

export interface CategoryProps {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelect: () => void;
}

export function CategorySelect({
  category,
  closeSelect,
  setCategory,
}: CategoryProps) {
  function handleCategorySelect(item: Category) {
    setCategory(item);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{
          flex: 1,
          width: "100%",
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => handleCategorySelect(item)}
            isActive={item.key === category.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button onPress={() => closeSelect()} title="Selecionar" />
      </S.Footer>
    </S.Container>
  );
}
