import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { emailConfirmacao } from "../../../email/email_confirmacao";
import { criptografaPalavra } from "../../../utils/criptografia";
import { enviarEmail } from "../../../utils/enviar_email";

const prisma = new PrismaClient();

const Api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({
                mensagem: "Método não suportado",
                sucesso: false,
            });
        }
        const emailExiste = await prisma.usuarios.findFirst({
            where: {
                email: req.body.email,
            },
            select: {
                email: true,
            },
        });
        if (emailExiste) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "Email já cadastrado",
            });
        }
        const cpfExiste = await prisma.usuarios.findFirst({
            where: {
                email: req.body.cpf,
            },
            select: {
                cpf: true,
            },
        });
        if (cpfExiste) {
            return res.status(422).json({
                sucesso: false,
                mensagem: "CPF já cadastrado",
            });
        }
        const telefone = await prisma.usuarios.findFirst({
            where: {
                email: req.body.telefone,
            },
            select: {
                telefone: true,
            },
        });
        if (telefone) {
            return res.status(200).json({
                sucesso: false,
                mensagem: "Telefone já cadastrado",
            });
        }
        const id_senha = Math.floor(Math.random() * 1000) + 1;
        const senha = criptografaPalavra(`${id_senha}${req.body.senha}`);
        const usuario = {
            nome: req.body.nome ?? "",
            cpf: req.body.cpf ?? "",
            email: req.body.email ?? "",
            telefone: req.body.telefone ?? "",
            rua: req.body.rua ?? "",
            numero: req.body.numero.toString() ?? "",
            complemento: req.body.complemento ?? "",
            bairro: req.body.bairro ?? "",
            cidade: req.body.cidade ?? "",
            estado: req.body.estado ?? "",
            cep: req.body.cep ?? "",
            senha: senha,
            ativo: 1,
            data_criado: new Date(),
            data_atualizado: new Date(),
            id_senha: id_senha,
            data_nasc: new Date(req.body.data_nasc ?? ""),
            verificado: 0,
            codigo_verificacao: criptografaPalavra(`${req.body.email}${senha}`),
        };
        enviarEmail({
            from: "naoresponda@vendagaragem.com.br",
            to: req.body.email,
            subject: "Venda de garagem - confirme seu e-mail",
            text: "",
            html: emailConfirmacao({
                nome: req.body.nome,
                url: `http://localhost:3000/logar/confirmar_email?confirmacao=${criptografaPalavra(
                    `${req.body.email}${senha}`
                )}`,
            }),
        });
        const usuarioCriado = await prisma.usuarios.create({
            data: usuario,
        });
        if (!usuarioCriado) {
            return res.status(200).json({
                sucesso: false,
                mensagem: "Erro ao criar usuário",
            });
        }
        return res.status(201).json({
            sucesso: true,
            mensagem: "Usuário criado com sucesso",
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
