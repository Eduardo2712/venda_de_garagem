import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "GET") {
            return res.status(405).json({
                mensagem: "Método não suportado",
                sucesso: false,
            });
        }
        const { confirmacao } = req.query;
        const nomeUsuario = await prisma.usuarios.findFirst({
            select: {
                nome: true,
                id: true,
            },
            where: {
                codigo_verificacao: String(confirmacao),
                verificado: 0,
            },
        });
        if (!nomeUsuario) {
            return res.status(422).json({
                mensagem: "E-mail não encontrado",
                sucesso: false,
                nome: "",
            });
        }
        await prisma.usuarios.update({
            where: {
                id: nomeUsuario.id,
            },
            data: {
                verificado: 1,
            },
        });
        return res.status(200).json({
            mensagem: "E-mail confirmado",
            sucesso: true,
            nome: nomeUsuario.nome,
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
