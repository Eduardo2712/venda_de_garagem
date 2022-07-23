import { faker } from "@faker-js/faker";
import { valores } from "@prisma/client";

const quantidade = 100;
const valoresSemente: Omit<valores, "id">[] = [];
for (let i = 0; i < quantidade; i++) {
    const dados: Omit<valores, "id"> = {
        data_criado: faker.date.between(
            "2010-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        id_anuncio: faker.mersenne.rand(50, 1),
        ativo: faker.mersenne.rand(2, 0),
        valor: Math.floor(Math.random() * 999999) + 1,
    };
    valoresSemente.push(dados);
}

export default valoresSemente;
