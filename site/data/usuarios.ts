import { criptografaPalavra } from "../src/utils/criptografia";
import { faker } from "@faker-js/faker";
import { usuarios } from "@prisma/client";

const quantidade = 100;
const usuariosSemente: Omit<usuarios, "id">[] = [];
for (let i = 0; i < quantidade; i++) {
    let senha = "12345678";
    let id_senha = faker.mersenne.rand(50, 1);
    let email = faker.internet.email();
    const dados: Omit<usuarios, "id"> = {
        ativo: faker.mersenne.rand(2, 0),
        cep: faker.phone.number("#####-###"),
        rua: faker.address.street(),
        numero: faker.address.buildingNumber(),
        complemento: faker.address.secondaryAddress(),
        bairro: faker.address.secondaryAddress(),
        cidade: faker.address.cityName(),
        estado: faker.address.state(),
        codigo_verificacao: criptografaPalavra(`${email}${senha}`),
        nome: faker.name.findName(),
        data_criado: faker.date.between(
            "2010-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        data_atualizado: faker.date.between(
            "2010-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        data_nasc: faker.date.between(
            "1930-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        senha: criptografaPalavra(`${id_senha}${senha}`),
        email: email,
        id_senha: id_senha,
        telefone: faker.phone.number("(##) #####-####"),
        verificado: faker.mersenne.rand(2, 0),
        cpf: faker.phone.number("###.###.###-##"),
    };
    usuariosSemente.push(dados);
}

export default usuariosSemente;
