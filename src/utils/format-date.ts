import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export const FormatDate = (date: Date) => {
  const dateFormatted = format(date, "d 'de' MMM.", { locale: ptBR });

  return dateFormatted;
}