/*
  Warnings:

  - Added the required column `id_tipo_anuncio` to the `anuncios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anuncios` ADD COLUMN `id_tipo_anuncio` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `imagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_anuncio` INTEGER NOT NULL,
    `principal` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` INTEGER NOT NULL DEFAULT 1,
    `data_criado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_ibfk_2` FOREIGN KEY (`id_tipo_anuncio`) REFERENCES `tipo_anuncios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `imagens` ADD CONSTRAINT `imagens_ibfk_1` FOREIGN KEY (`id_anuncio`) REFERENCES `anuncios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
