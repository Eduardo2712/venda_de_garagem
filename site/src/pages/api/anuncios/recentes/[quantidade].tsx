import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "GET") {
            return res
                .status(405)
                .json({ mensagem: "Método não suportado", sucesso: false });
        }
        const { quantidade } = req.query;
        if (isNaN(Number(quantidade))) {
            return res.status(422).json({
                mensagem: "Id deve ser um número",
                sucesso: false,
            });
        } else if (Number(quantidade) < 1) {
            return res.status(422).json({
                mensagem: "Id deve ser um número maior que 0",
                sucesso: false,
            });
        }
        const anuncios = await prisma.anuncios.findMany({
            where: {
                ativo: 1,
            },
            select: {
                id: true,
                titulo: true,
                descricao: true,
                data_criado: true,
                usuarios: {
                    select: {
                        nome: true,
                        email: true,
                        telefone: true,
                    },
                },
                imagens: {
                    where: {
                        ativo: 1,
                        principal: 1,
                    },
                    select: {
                        caminho: true,
                    },
                },
                tipo_anuncios: {
                    select: {
                        nome: true,
                    },
                },
                valores: {
                    select: {
                        valor: true,
                        data_criado: true,
                    },
                    where: {
                        ativo: 1,
                    },
                    orderBy: {
                        data_criado: "desc",
                    },
                },
            },
            orderBy: {
                data_criado: "asc",
            },
            take: Number(quantidade),
        });
        return res.status(200).json({ anuncios, sucesso: true });
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
