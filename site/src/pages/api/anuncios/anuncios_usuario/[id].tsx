import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient({});

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "GET") {
            return res.status(405).json({
                mensagem: "Método não suportado",
                sucesso: false,
            });
        }
        const { id } = req.query;
        if (isNaN(Number(id))) {
            return res.status(422).json({
                mensagem: "Id deve ser um número",
                sucesso: false,
            });
        } else if (Number(id) < 1) {
            return res.status(422).json({
                mensagem: "Id deve ser um número maior que 0",
                sucesso: false,
            });
        }
        const anuncios = await prisma.anuncios.findMany({
            where: {
                id_usuario: Number(id),
                ativo: 1,
            },
            include: {
                imagens: {
                    select: {
                        nome: true,
                        caminho: true,
                    },
                    where: {
                        ativo: 1,
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
                        ativo: true,
                    },
                    orderBy: {
                        data_criado: "asc",
                    },
                },
            },
        });
        return res.status(200).json({
            sucesso: true,
            mensagem: "",
            anuncios: anuncios,
        });
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
