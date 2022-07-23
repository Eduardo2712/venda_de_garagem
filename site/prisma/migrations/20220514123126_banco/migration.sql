/*
  Warnings:

  - Added the required column `bairro` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cidade` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_estado` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `anuncios` DROP FOREIGN KEY `anuncios_ibfk_3`;

-- DropForeignKey
ALTER TABLE `anuncios` DROP FOREIGN KEY `anuncios_ibfk_4`;

-- AlterTable
ALTER TABLE `anuncios` ADD COLUMN `cidadesId` INTEGER NULL,
    ADD COLUMN `estadosId` INTEGER NULL,
    MODIFY `bairro` VARCHAR(255) NULL,
    MODIFY `id_cidade` INTEGER NULL,
    MODIFY `id_estado` INTEGER NULL,
    MODIFY `numero` VARCHAR(255) NULL,
    MODIFY `rua` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `bairro` VARCHAR(255) NOT NULL,
    ADD COLUMN `cep` VARCHAR(255) NULL,
    ADD COLUMN `complemento` VARCHAR(255) NULL,
    ADD COLUMN `id_cidade` INTEGER NOT NULL,
    ADD COLUMN `id_estado` INTEGER NOT NULL,
    ADD COLUMN `numero` VARCHAR(255) NOT NULL,
    ADD COLUMN `rua` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_estadosId_fkey` FOREIGN KEY (`estadosId`) REFERENCES `estados`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `anuncios` ADD CONSTRAINT `anuncios_cidadesId_fkey` FOREIGN KEY (`cidadesId`) REFERENCES `cidades`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
