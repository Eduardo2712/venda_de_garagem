/*
  Warnings:

  - You are about to drop the column `cidadesId` on the `anuncios` table. All the data in the column will be lost.
  - You are about to drop the column `estadosId` on the `anuncios` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `anuncios` DROP FOREIGN KEY `anuncios_cidadesId_fkey`;

-- DropForeignKey
ALTER TABLE `anuncios` DROP FOREIGN KEY `anuncios_estadosId_fkey`;

-- AlterTable
ALTER TABLE `anuncios` DROP COLUMN `cidadesId`,
    DROP COLUMN `estadosId`;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_ibfk_4` FOREIGN KEY (`id_estado`) REFERENCES `estados`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_ibfk_3` FOREIGN KEY (`id_cidade`) REFERENCES `cidades`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
