export function currencyFormatter(value: number) {
  return Number(value)
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .toString();
}
