import { comentarios, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "POST") {
            return res
                .status(405)
                .json({ mensagem: "Método não suportado", sucesso: false });
        }
        const comentario: Omit<comentarios, "id" | "data_criado"> = {
            id_anuncio: req.body.id_anuncio,
            id_usuario: req.body.id_usuario,
            comentario: req.body.comentario,
        };
        const novoComentario = await prisma.comentarios.create({
            data: comentario,
        });
        if (!novoComentario) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "Erro ao criar comentário",
            });
        }
        return res.status(201).json({
            sucesso: true,
            mensagem: "Comentário criado com sucesso",
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
