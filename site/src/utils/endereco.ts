import { Estados } from "../types";

export const estadoSigla = (sigla: string) => {
    const estados: Omit<Estados, "id">[] = [
        { nome: "Acre", uf: "AC" },
        { nome: "Alagoas", uf: "AL" },
        { nome: "Amazonas", uf: "AM" },
        { nome: "Amapá", uf: "AP" },
        { nome: "Bahia", uf: "BA" },
        { nome: "Ceará", uf: "CE" },
        { nome: "Distrito Federal", uf: "DF" },
        { nome: "Espírito Santo", uf: "ES" },
        { nome: "Goiás", uf: "GO" },
        { nome: "Maranhão", uf: "MA" },
        { nome: "Minas Gerais", uf: "MG" },
        { nome: "Mato Grosso do Sul", uf: "MS" },
        { nome: "Mato Grosso", uf: "MT" },
        { nome: "Pará", uf: "PA" },
        { nome: "Paraíba", uf: "PB" },
        { nome: "Pernambuco", uf: "PE" },
        { nome: "Piauí", uf: "PI" },
        { nome: "Paraná", uf: "PR" },
        { nome: "Rio de Janeiro", uf: "RJ" },
        { nome: "Rio Grande do Norte", uf: "RN" },
        { nome: "Rondônia", uf: "RO" },
        { nome: "Roraima", uf: "RR" },
        { nome: "Rio Grande do Sul", uf: "RS" },
        { nome: "Santa Catarina", uf: "SC" },
        { nome: "Sergipe", uf: "SE" },
        { nome: "São Paulo", uf: "SP" },
        { nome: "Tocantins", uf: "TO" },
    ];
    let estado_nome: string = "";
    estados.map((estado: Omit<Estados, "id">) => {
        if (estado.uf.toUpperCase() === sigla.toUpperCase()) {
            estado_nome = estado.nome;
        }
    });
    return estado_nome;
};
