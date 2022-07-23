export const mascaraCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    e.target.value = valor
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");
    return e;
};

export const mascaraCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    e.target.value = valor
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    return e;
};

export const mascaraDinheiro = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    e.target.value = valor
        .replace(/\D/g, "")
        .replace(/(\d)(\d{2})$/, "$1,$2")
        .replace(/(?=(\d{3})+(\D))\B/g, ".");
    return e;
};

export const mascaraTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    e.target.value = valor
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
        .replace(/(-\d{4})\d+?$/, "$1");
    return e;
};
