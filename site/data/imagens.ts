import { faker } from "@faker-js/faker";
import { imagens } from "@prisma/client";

const quantidade = 100;
const imagensSemente: Omit<imagens, "id">[] = [];
for (let i = 0; i < quantidade; i++) {
    const dados: Omit<imagens, "id"> = {
        data_criado: faker.date.between(
            "2010-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        id_anuncio: faker.mersenne.rand(50, 1),
        ativo: faker.mersenne.rand(2, 0),
        caminho: faker.image.city(640, 480, true),
        nome: faker.word.adjective(),
        principal: 1,
    };
    imagensSemente.push(dados);
}

export default imagensSemente;
