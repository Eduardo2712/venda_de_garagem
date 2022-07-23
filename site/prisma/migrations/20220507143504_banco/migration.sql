/*
  Warnings:

  - You are about to drop the column `data_atualizado` on the `valores` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `id_anuncio` ON `valores`;

-- AlterTable
ALTER TABLE `valores` DROP COLUMN `data_atualizado`;

-- CreateTable
CREATE TABLE `anuncios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `ativo` INTEGER NOT NULL DEFAULT 1,
    `id_valor` INTEGER NOT NULL,
    `data_criado` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data_atualizado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_anuncios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` INTEGER NOT NULL DEFAULT 1,
    `data_criado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_anuncio` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `data_criado` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `valores` ADD CONSTRAINT `valores_ibfk_1` FOREIGN KEY (`id_anuncio`) REFERENCES `anuncios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `comentarios` ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_anuncio`) REFERENCES `anuncios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
