import { tipoAnunciosSemente } from "../data/tipo_anuncios";
import { cidadesSemente } from "../data/cidades";
import { estadosSemente } from "../data/estados";
import { PrismaClient } from "@prisma/client";
import anunciosSemente from "../data/anuncios";
import usuariosSemente from "../data/usuarios";
import valoresSemente from "../data/valores";
import comentariosSemente from "../data/comentarios";
import imagensSemente from "../data/imagens";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.estados.createMany({
        data: estadosSemente,
    });
    await prisma.cidades.createMany({
        data: cidadesSemente,
    });
    await prisma.usuarios.createMany({
        data: usuariosSemente,
    });
    await prisma.tipo_anuncios.createMany({
        data: tipoAnunciosSemente,
    });
    await prisma.anuncios.createMany({
        data: anunciosSemente,
    });
    await prisma.valores.createMany({
        data: valoresSemente,
    });
    await prisma.comentarios.createMany({
        data: comentariosSemente,
    });
    await prisma.imagens.createMany({
        data: imagensSemente,
    });
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
