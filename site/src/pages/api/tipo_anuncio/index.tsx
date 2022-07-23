import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "GET") {
            return res.status(405).json({
                mensagem: "Método não suportado",
                sucesso: false,
            });
        }
        const tipo_anuncios = await prisma.tipo_anuncios.findMany({
            where: {
                ativo: 1,
            },
            select: {
                nome: true,
                id: true,
            },
        });
        return res
            .status(200)
            .json({ mensagem: "", tipo_anuncios, sucesso: true });
    } catch (error: unknown) {
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
