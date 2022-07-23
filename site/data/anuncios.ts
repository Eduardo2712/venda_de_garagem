import { anuncios } from "@prisma/client";
import { faker } from "@faker-js/faker";

const quantidade = 100;
const anunciosSemente: Omit<anuncios, "id">[] = [];
for (let i = 0; i < quantidade; i++) {
    const dados: Omit<anuncios, "id"> = {
        id_usuario: faker.mersenne.rand(50, 1),
        id_tipo_anuncio: faker.mersenne.rand(7, 1),
        titulo: faker.commerce.productName(),
        descricao: faker.lorem.text(),
        ativo: faker.mersenne.rand(2, 0),
        data_criado: faker.date.between(
            "2010-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        data_atualizado: faker.date.between(
            "2010-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        cep: faker.phone.number("#####-###"),
        rua: faker.address.street(),
        numero: faker.address.buildingNumber(),
        complemento: faker.address.secondaryAddress(),
        bairro: faker.address.secondaryAddress(),
        cidade: faker.address.cityName(),
        estado: faker.address.state(),
    };
    anunciosSemente.push(dados);
}
export default anunciosSemente;
