/*
  Warnings:

  - You are about to drop the column `id_valor` on the `anuncios` table. All the data in the column will be lost.
  - Added the required column `caminho` to the `imagens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anuncios` DROP COLUMN `id_valor`;

-- AlterTable
ALTER TABLE `imagens` ADD COLUMN `caminho` VARCHAR(191) NOT NULL;
