type Props = {
    nome: string;
    url: string;
};

export const emailConfirmacao = (props: Props) => {
    return `
        <body>
            <table width="100%">
                <tr>
                    <td align="center" style="font-weight: bold; color: black;>Olá ${props.nome}</td>
                </tr>
                <tr>
                    <td align="center" style="font-weight: bold; color: black;">Confirme seu e-mail na Venda de garagem</td>
                </tr>
            </table>
            <table width="100%">
                <tr>
                    <td align="center">
                        <table>
                            <tr>
                                <td align="center">
                                    <a style="padding: 10px; background-color: blue; text-decoration: none; color: white;" href="${props.url}" target="_blank">
                                        Confirmar e-mail
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    `;
};
