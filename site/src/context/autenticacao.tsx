import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { RoutesProps } from "react-router-dom";
import { ContextLogin, Usuario } from "../types";
import { useRouter } from "next/router";

export const AutenticacaoContext = createContext<ContextLogin | null>(null);

export const AutenticacaoProvider = ({ children }: RoutesProps) => {
    const [usuario, setUsuario] = useState<Usuario>();
    const [carregando, setCarregando] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const usuarioRecuperado = localStorage.getItem("usuario");
        const token = localStorage.getItem("token");
        if (usuarioRecuperado && token) {
            setUsuario(JSON.parse(usuarioRecuperado));
        }
        setCarregando(false);
    }, []);

    const login = async (email: string, senha: string) => {
        try {
            const data: Pick<Usuario, "email" | "senha"> = {
                email,
                senha,
            };
            const resposta = await axios.post(
                `${process.env.NEXT_PUBLIC_URL_BASE}/api/usuarios/login`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            if (resposta.data.sucesso) {
                setUsuario(resposta.data.usuario);
                localStorage.setItem(
                    "usuario",
                    JSON.stringify(resposta.data.usuario)
                );
                localStorage.setItem("token", resposta.data.token);
            }
            return resposta.data;
        } catch (erro) {
            console.error(`Erro ${erro}`);
        }
    };

    const logout = () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        setUsuario(undefined);
        router.push("/");
    };

    return (
        <AutenticacaoContext.Provider
            value={{
                autenticado: Boolean(usuario),
                usuario,
                login,
                logout,
                carregando,
            }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
};
