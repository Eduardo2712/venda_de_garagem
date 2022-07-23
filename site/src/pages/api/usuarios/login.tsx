import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { criptografaPalavra } from "../../../utils/criptografia";

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({
                mensagem: "Método não suportado",
                sucesso: false,
            });
        }
        const { email, senha } = req.body;
        const chave = process.env.CHAVE_CRIPTOGRAFIA;
        if (!chave) {
            throw new Error("Chave de criptografia não definida");
        }
        if (email === "" || senha === "") {
            return res.status(422).json({
                sucesso: false,
                mensagem: "Email e senha não devem ser vazios",
            });
        }
        const usuario = await prisma.usuarios.findFirst({
            where: {
                email: email,
            },
        });
        if (!usuario) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "Usuário e/ou senha errado(s)",
            });
        }
        if (!usuario.verificado) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "E-mail não confirmado",
            });
        }
        const senhaCriptografada = await criptografaPalavra(
            `${usuario.id_senha}${senha}`
        );
        if (senhaCriptografada !== usuario.senha) {
            return res.status(200).json({
                sucesso: false,
                mensagem: "Usuário e/ou senha errado(s)",
            });
        }
        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email,
            },
            chave,
            {
                expiresIn: "1d",
            }
        );
        return res.status(200).json({
            sucesso: true,
            token,
            usuario: {
                nome: usuario.nome,
                email: usuario.email,
                telefone: usuario.telefone,
                rua: usuario.rua,
                numero: usuario.numero,
                bairro: usuario.bairro,
                cidade: usuario.cidade,
                estado: usuario.estado,
                cep: usuario.cep,
                id: usuario.id,
            },
        });
    } catch (error) {
        if (typeof error === "string") {
            return res.status(500).json({ erro: error });
        } else if (error instanceof Error) {
            return res.status(500).json({
                erro: error.message,
            });
        }
    }
};

export default Api;
