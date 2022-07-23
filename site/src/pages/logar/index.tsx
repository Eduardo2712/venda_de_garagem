import ContainerPrincipal from "../../components/container_principal";
import TelaLogin from "./tela_login";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AutenticacaoContext } from "../../context/autenticacao";
import { ContextLogin } from "../../types";

const Logar = () => {
    const { autenticado } = useContext(AutenticacaoContext) as ContextLogin;
    const router = useRouter();

    useEffect(() => {
        if (autenticado) {
            router.push("/");
        }
    }, []);

    return (
        <>
            <ContainerPrincipal>
                <TelaLogin></TelaLogin>
            </ContainerPrincipal>
        </>
    );
};

export default Logar;
