import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    //     log: [
    //         {
    //             emit: "event",
    //             level: "query",
    //         },
    //         "info",
    //         "warn",
    //         "error",
    //     ],
    // });
    // prisma.$on("query", (e) => {
    //     console.log("Query: " + e.query);
    //     console.log("Duration: " + e.duration + "ms");
});

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
        const anuncio = await prisma.anuncios.findFirst({
            where: {
                id: Number(id),
                ativo: 1,
            },
            include: {
                usuarios: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                        telefone: true,
                    },
                },
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
        return res.status(200).json({ mensagem: "", anuncio, sucesso: true });
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
