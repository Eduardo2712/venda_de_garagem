/*
  Warnings:

  - Added the required column `bairro` to the `anuncios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cidade` to the `anuncios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_estado` to the `anuncios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `anuncios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `anuncios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anuncios` ADD COLUMN `bairro` VARCHAR(255) NOT NULL,
    ADD COLUMN `cep` VARCHAR(255) NULL,
    ADD COLUMN `complemento` VARCHAR(255) NULL,
    ADD COLUMN `id_cidade` INTEGER NOT NULL,
    ADD COLUMN `id_estado` INTEGER NOT NULL,
    ADD COLUMN `numero` VARCHAR(255) NOT NULL,
    ADD COLUMN `rua` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `estados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `uf` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `id_estado` INTEGER NOT NULL,

    INDEX `cidades_ibfk_1`(`id_estado`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_ibfk_4` FOREIGN KEY (`id_estado`) REFERENCES `estados`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_ibfk_3` FOREIGN KEY (`id_cidade`) REFERENCES `cidades`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cidades` ADD CONSTRAINT `cidades_ibfk_1` FOREIGN KEY (`id_estado`) REFERENCES `estados`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
