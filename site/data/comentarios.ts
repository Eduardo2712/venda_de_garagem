import { faker } from "@faker-js/faker";
import { comentarios } from "@prisma/client";

const quantidade = 100;
const comentariosSemente: Omit<comentarios, "id">[] = [];
for (let i = 0; i < quantidade; i++) {
    const dados: Omit<comentarios, "id"> = {
        comentario: faker.lorem.text(),
        data_criado: faker.date.between(
            "2010-01-01T00:00:00.000Z",
            "2022-01-01T00:00:00.000Z"
        ),
        id_anuncio: faker.mersenne.rand(50, 1),
        id_usuario: faker.mersenne.rand(50, 1),
    };
    comentariosSemente.push(dados);
}

export default comentariosSemente;
