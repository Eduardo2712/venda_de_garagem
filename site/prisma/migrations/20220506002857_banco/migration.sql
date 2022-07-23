-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `ativo` INTEGER NOT NULL DEFAULT 1,
    `id_senha` INTEGER NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(255) NOT NULL,
    `data_nasc` DATE NOT NULL,
    `cpf` VARCHAR(255) NOT NULL,
    `login` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `data_criado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data_atualizado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `valores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valor` INTEGER NOT NULL,
    `ativo` INTEGER NOT NULL DEFAULT 1,
    `id_anuncio` INTEGER NOT NULL,
    `data_criado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data_atualizado` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_anuncio`(`id_anuncio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
