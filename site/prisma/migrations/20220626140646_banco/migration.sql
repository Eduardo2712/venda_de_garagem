/*
  Warnings:

  - Added the required column `codigo_verificacao` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `codigo_verificacao` VARCHAR(255) NOT NULL,
    ADD COLUMN `verificado` INTEGER NOT NULL DEFAULT 0;
