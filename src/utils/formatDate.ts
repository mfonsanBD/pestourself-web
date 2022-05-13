export const getDateFormat = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}
