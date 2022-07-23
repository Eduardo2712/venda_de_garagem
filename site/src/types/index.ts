export type Usuario = {
    id: number;
    nome: string;
    cpf: string;
    data_nasc: string;
    email: string;
    telefone: string;
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    senha: string;
};

export type TipoAnuncio = {
    id: number;
    nome: string;
};

export type Imagem = {
    principal: boolean;
    nome: string;
    caminho: string;
};

export type Valor = {
    valor: number;
    data_criado: string;
    ativo: number;
};

export type Comentario = {
    id: number;
    id_anuncio: number;
    id_usuario: number;
    comentario: string;
    data_criado: Date;
    usuarios: Usuario;
};

export type Anuncio = {
    id: number;
    titulo: string;
    descricao: string;
    usuarios: Usuario;
    imagens: Imagem[];
    tipo_anuncios: TipoAnuncio;
    valores: Valor[];
    comentarios: Comentario[];
    data_criado: Date;
    data_atualizado: Date;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    ativo: number;
    id_usuario: number;
};

export type ContextLogin = {
    autenticado: boolean;
    usuario: Usuario | undefined;
    carregando: boolean;
    logout: () => void;
    login: (email: string, senha: string) => Promise<unknown>;
};
