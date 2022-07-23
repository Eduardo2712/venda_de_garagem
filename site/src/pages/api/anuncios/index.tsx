import { NextApiRequest, NextApiResponse } from "next";
import subirImagens from "../../../middleware/subir_imagens";
import { anuncios, imagens, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const multer = require("multer");

const Api = async (
    req: NextApiRequest & { [key: string]: any },
    res: NextApiResponse
): Promise<void> => {
    if (req.method !== "POST") {
        return res.status(405).json({
            mensagem: "Método não suportado",
            sucesso: false,
        });
    }
    try {
        const multerUpload = multer({
            storage: multer.diskStorage({
                destination: (req: NextApiRequest, file: any, cb: any) => {
                    cb(null, "./public/imagens");
                },
                filename: (req: NextApiRequest, file: any, cb: any) => {
                    cb(null, `${Date.now().toString()}_${file.originalname}`);
                },
            }),
            fileFilter: (req: NextApiRequest, file: any, cb: any) => {
                const tiposPermitidos = [
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                ];
                if (tiposPermitidos.indexOf(file.mimetype) === -1) {
                    return cb(new Error("Tipo de arquivo inválido"), false);
                } else {
                    return cb(null, true);
                }
            },
        });
        await subirImagens(req, res, multerUpload.array("imagem", 10));
        const imagens = req.files;
        const anuncio: Omit<
            anuncios,
            "id" | "data_atualizado" | "data_criado"
        > = {
            ativo: 1,
            bairro: req.body.bairro ?? "",
            cep: req.body.cep ?? "",
            cidade: req.body.cidade ?? "",
            estado: req.body.estado ?? "",
            complemento: req.body.complemento ?? "",
            descricao: req.body.descricao ?? "",
            id_tipo_anuncio: req.body.id_tipo_anuncio ?? "",
            id_usuario: req.body.id_usuario ?? "",
            numero: req.body.numero ?? "",
            rua: req.body.rua ?? "",
            titulo: req.body.titulo ?? "",
        };
        const novo_anuncio = await prisma.anuncios.create({
            data: anuncio,
        });
        if (!novo_anuncio) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "Erro ao salvar anúncio",
            });
        }
        const array_imagens: Omit<imagens, "id" | "data_criado">[] = [];
        if (imagens.length > 0) {
            imagens.forEach((imagem: any, index: number) => {
                const imagem_criada: Omit<imagens, "id" | "data_criado"> = {
                    ativo: 1,
                    caminho: imagem.path.replace("public", ""),
                    nome: imagem.originalname,
                    principal: 1,
                    id_anuncio: Number(novo_anuncio.id),
                };
                array_imagens.push(imagem_criada);
            });
            const imagens_criadas = await prisma.imagens.createMany({
                data: array_imagens,
            });
            if (!imagens_criadas) {
                return res.status(422).json({
                    sucesso: false,
                    mensagem: "Erro ao salvar imagens",
                });
            }
            return res.status(422).json({
                sucesso: true,
                mensagem: "Anúncio salvo com sucesso",
            });
        }
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

export const config = {
    api: {
        bodyParser: false,
    },
};

export default Api;
