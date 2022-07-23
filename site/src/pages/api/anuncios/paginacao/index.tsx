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
        const { quantidade, pagina, busca, tipoAnuncio } = req.query;
        if (isNaN(Number(quantidade)) || isNaN(Number(pagina))) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "Quantidade e página devem ser números",
            });
        } else if (Number(quantidade) < 1 || Number(pagina) < 1) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "Quantidade e página devem ser maiores que 0",
            });
        }
        const totalAnuncios = await prisma.anuncios.count({
            where: {
                ativo: 1,
                AND: [
                    busca
                        ? {
                              titulo: {
                                  contains: String(busca),
                              },
                          }
                        : {},
                    tipoAnuncio
                        ? {
                              id_tipo_anuncio: Number(tipoAnuncio),
                          }
                        : {},
                ],
            },
        });
        const anuncios = await prisma.anuncios.findMany({
            where: {
                ativo: 1,
                AND: [
                    busca
                        ? {
                              titulo: {
                                  contains: String(busca),
                              },
                          }
                        : {},
                    tipoAnuncio
                        ? {
                              id_tipo_anuncio: Number(tipoAnuncio),
                          }
                        : {},
                ],
            },
            include: {
                usuarios: {
                    select: {
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
                    },
                    orderBy: {
                        data_criado: "desc",
                    },
                },
            },
            skip: Number(quantidade) * (Number(pagina) - 1),
            take: Number(quantidade),
        });
        return res.status(200).json({ anuncios, totalAnuncios, sucesso: true });
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
