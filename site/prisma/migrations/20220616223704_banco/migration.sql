/*
  Warnings:

  - You are about to drop the column `id_cidade` on the `anuncios` table. All the data in the column will be lost.
  - You are about to drop the column `id_estado` on the `anuncios` table. All the data in the column will be lost.
  - You are about to drop the column `id_cidade` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `id_estado` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `cidade` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `anuncios` DROP FOREIGN KEY `anuncios_ibfk_3`;

-- DropForeignKey
ALTER TABLE `anuncios` DROP FOREIGN KEY `anuncios_ibfk_4`;

-- AlterTable
ALTER TABLE `anuncios` DROP COLUMN `id_cidade`,
    DROP COLUMN `id_estado`,
    ADD COLUMN `cidade` VARCHAR(255) NULL,
    ADD COLUMN `estado` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `id_cidade`,
    DROP COLUMN `id_estado`,
    ADD COLUMN `cidade` VARCHAR(255) NOT NULL,
    ADD COLUMN `estado` VARCHAR(255) NOT NULL;
