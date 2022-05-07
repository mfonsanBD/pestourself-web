export default function FormatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  })
    .format(price)
    .replace(/\s/g, '')
}
