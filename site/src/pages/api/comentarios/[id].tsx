import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Anuncio } from "../../../types";

const prisma = new PrismaClient();

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
                sucesso: false,
                mensagem: "id_usuario deve ser um número",
            });
        } else if (Number(id) < 1) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "id_usuario deve ser um número maior que 0",
            });
        }
        const anuncios = await prisma.anuncios.findMany({
            where: {
                OR: [
                    {
                        id_usuario: Number(id),
                    },
                    {
                        comentarios: {
                            some: {
                                id_usuario: Number(id),
                            },
                        },
                    },
                ],
            },
            select: {
                id: true,
                titulo: true,
                id_usuario: true,
                comentarios: {
                    select: {
                        comentario: true,
                        data_criado: true,
                        usuarios: {
                            select: {
                                nome: true,
                                id: true,
                            },
                        },
                    },
                    orderBy: {
                        data_criado: "desc",
                    },
                },
                imagens: {
                    select: {
                        caminho: true,
                    },
                    where: {
                        principal: 1,
                    },
                },
                usuarios: {
                    select: {
                        nome: true,
                        id: true,
                    },
                },
            },
        });
        // const anuncios = await prisma.anuncios.findMany({
        //     where: {
        //         id_usuario: Number(id),
        //         ativo: 1,
        //     },
        //     select: {
        //         id: true,
        //     },
        // });
        // let meus_anuncios: number[] = [];
        // if (anuncios.length > 0) {
        //     anuncios.map((anuncio: Pick<Anuncio, "id">) => {
        //         meus_anuncios.push(anuncio.id);
        //     });
        // }
        // const comentarios = await prisma.comentarios.findMany({
        //     where: {
        //         OR: [
        //             {
        //                 id_usuario: Number(id),
        //             },
        //             meus_anuncios.length > 0
        //                 ? {
        //                       id_anuncio: {
        //                           in: meus_anuncios,
        //                       },
        //                   }
        //                 : {},
        //         ],
        //     },
        //     select: {
        //         comentario: true,
        //     },
        // });
        return res.status(200).json({
            sucesso: true,
            anuncios: anuncios,
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
