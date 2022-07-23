import Container from "./estilo";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ModalAviso from "../../../components/modal_aviso";
import { AutenticacaoContext } from "../../../context/autenticacao";
import { ContextLogin } from "../../../types";
import BotaoRedirecionar from "../../../components/botao_redirecionar";
import BotaoEnviar from "../../../components/botao_enviar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setModalAviso } from "../../../store/modal_aviso/modalAviso.store";
import TituloModulo from "../../../components/titulo_modulo";
import CampoFormulario from "../../../components/campo_formulario";

const TelaLogin = () => {
    const router = useRouter();
    const modalAviso = useSelector((state: RootState) => state.modalAviso);
    const dispatch = useDispatch();
    const { login } = useContext(AutenticacaoContext) as ContextLogin;

    useEffect(() => {
        dispatch(
            setModalAviso({
                ...modalAviso,
                ativo: false,
            })
        );
    }, []);

    const esquema = Yup.object().shape({
        email: Yup.string()
            .email("Preencha com um e-mail válido")
            .required("Preencha esse campo!"),
        senha: Yup.string().required("Preencha esse campo!"),
    });

    const enviar = (values: any, { resetForm }: any) => {
        login(values.email.toUpperCase(), values.senha.toUpperCase()).then(
            (retorno: any) => {
                if (!retorno.sucesso) {
                    resetForm();
                    dispatch(
                        setModalAviso({
                            descricao: retorno.mensagem,
                            ativo: true,
                        })
                    );
                } else {
                    router.push("/");
                }
            }
        );
    };

    return (
        <>
            <Container>
                <Formik
                    onSubmit={enviar}
                    validateOnMount
                    validationSchema={esquema}
                    initialValues={{
                        email: "",
                        senha: "",
                    }}
                >
                    {({ handleChange }) => (
                        <Form method="post">
                            <TituloModulo titulo="Acesse a sua conta"></TituloModulo>
                            <div className="bloco_formulario">
                                <CampoFormulario
                                    nome="email"
                                    tipo="text"
                                    titulo="Usuário*"
                                    on_change={handleChange}
                                ></CampoFormulario>
                                <CampoFormulario
                                    nome="senha"
                                    tipo="password"
                                    titulo="Senha*"
                                    on_change={handleChange}
                                ></CampoFormulario>
                                <div className="link">
                                    <Link href={"/criar_conta"}>
                                        Não tenho cadastro
                                    </Link>
                                </div>
                                <div className="bloco_botoes">
                                    <BotaoRedirecionar></BotaoRedirecionar>
                                    <BotaoEnviar titulo="Entrar"></BotaoEnviar>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
            <ModalAviso></ModalAviso>
        </>
    );
};

export default TelaLogin;
