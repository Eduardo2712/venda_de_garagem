import { isToday, isYesterday, parseISO } from "date-fns";

export const formatarDataHorario = (dataSemformatacao: Date) => {
    const data = parseISO(dataSemformatacao.toString());
    if (isToday(data)) {
        return `Hoje às ${data.toLocaleTimeString()}`;
    } else if (isYesterday(data)) {
        return `Ontem às ${data.toLocaleTimeString()}`;
    } else {
        return `${data.toLocaleDateString()} às ${data.toLocaleTimeString()}`;
    }
};
