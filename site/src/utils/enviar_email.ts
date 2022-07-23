const nodemailer = require("nodemailer");

type Props = {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
};

export const enviarEmail = async (mensagem: Props) => {
    const transportador = nodemailer.createTransport({
        host: process.env.SERVIDOR_EMAIL,
        port: process.env.PORTA_EMAIL,
        auth: {
            user: process.env.USUARIO_EMAIL,
            pass: process.env.SENHA_EMAIL,
        },
    });
    await transportador.sendMail(mensagem, (erro: Error) => {
        transportador.close();
        if (erro) {
            return {
                sucesso: false,
                mensagem: "E-mail não enviado",
            };
        }
        return {
            sucesso: true,
            mensagem: "E-mail enviado com sucesso",
        };
    });
};
