import { NextApiRequest, NextApiResponse } from "next";

const jwt = require("jsonwebtoken");

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    const chave = process.env.CHAVE_CRIPTOGRAFIA;
    if (token === "" || token === undefined) {
        return res.status(422).json({
            autenticado: false,
            mensagem: "Token não encontrado",
        });
    }
    jwt.verify(token, chave, (err: Error, decoder: any) => {
        if (err) {
            return res.status(401).json({
                autenticado: false,
                mensagem: "Usuário não autorizado",
            });
        } else {
            return res.status(200).json({
                autenticado: true,
                mensagem: "Usuário autorizado",
            });
        }
    });
};

export default Api;
