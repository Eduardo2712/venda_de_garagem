const crypto = require("crypto");
const algoritmoCriptografia = "sha256";

export const criptografaPalavra = (palavra: string) => {
    const palavraCriptografada = crypto
        .createHmac(algoritmoCriptografia, process.env.CHAVE_CRIPTOGRAFIA)
        .update(palavra)
        .digest("hex");
    return palavraCriptografada;
};
