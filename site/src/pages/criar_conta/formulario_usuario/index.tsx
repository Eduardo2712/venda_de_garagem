import Container from "./estilo";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import BotaoRedirecionar from "../../../components/botao_redirecionar";
import BotaoEnviar from "../../../components/botao_enviar";
import axios from "axios";
import {
    mascaraCEP,
    mascaraCPF,
    mascaraTelefone,
} from "../../../utils/mascaras";
import ModalCarregando from "../../../components/modal_carregando";
import { Usuario } from "../../../types";
import { useDispatch } from "react-redux";
import { setModalCarregando } from "../../../store/modal_carregando/modalCarregando.store";
import { setModalAviso } from "../../../store/modal_aviso/modalAviso.store";
import { useRouter } from "next/router";
import ModalAviso from "../../../components/modal_aviso";
import { useState } from "react";
import TituloModulo from "../../../components/titulo_modulo";
import CampoFormulario from "../../../components/campo_formulario";
import { estadoSigla } from "../../../utils/endereco";

const FormularioUsuario = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [desativarBotao, setDesativarBotao] = useState<boolean>(false);
    const esquema = Yup.object().shape({
        nome: Yup.string().required("Preencha esse campo!"),
        cpf: Yup.string().required("Preencha esse campo!"),
        email: Yup.string()
            .email("Preencha com um e-mail válido")
            .required("Preencha esse campo!"),
        telefone: Yup.string().required("Preencha esse campo!"),
        data_nasc: Yup.string().required("Preencha esse campo!"),
        cep: Yup.string(),
        rua: Yup.string().required("Preencha esse campo!"),
        numero: Yup.number().required("Preencha esse campo!"),
        complemento: Yup.string(),
        bairro: Yup.string().required("Preencha esse campo!"),
        cidade: Yup.string().required("Preencha esse campo!"),
        estado: Yup.string().required("Preencha esse campo!"),
        senha: Yup.string()
            .min(8, "Senha deve conter no mínimo 8 caracteres")
            .required("Preencha esse campo!"),
        senha_confirmacao: Yup.string()
            .min(8, "Senha deve conter no mínimo 8 caracteres")
            .oneOf([Yup.ref("senha"), null], "As senhas devem ser iguais"),
    });

    const enviar = (values: Omit<Usuario, "id">) => {
        const usuario: Omit<Usuario, "id"> = {
            nome: values.nome.toUpperCase(),
            cpf: values.cpf,
            email: values.email.toUpperCase(),
            telefone: values.telefone,
            data_nasc: values.data_nasc,
            cep: values.cep,
            rua: values.rua.toUpperCase(),
            numero: values.numero,
            complemento: values.complemento.toUpperCase(),
            bairro: values.bairro.toUpperCase(),
            cidade: values.cidade.toUpperCase(),
            estado: values.estado.toUpperCase(),
            senha: values.senha,
        };
        axios
            .post(
                `${process.env.NEXT_PUBLIC_URL_BASE}/api/usuarios/criar`,
                usuario
            )
            .then((resposta) => {
                if (!resposta.data.sucesso) {
                    dispatch(
                        setModalAviso({
                            ativo: true,
                            descricao: resposta.data.mensagem,
                        })
                    );
                } else {
                    setDesativarBotao(true);
                    dispatch(
                        setModalAviso({
                            ativo: true,
                            descricao: `E-mail de confirmação enviado para ${values.email.toUpperCase()}`,
                        })
                    );
                    setTimeout(() => {
                        router.push("/logar");
                    }, 4000);
                }
            })
            .catch((err) => {
                console.error(`Erro: ${err}`);
            });
    };

    const buscarCep = (
        cep: string,
        campos: (
            field: string,
            value: any,
            shouldValidate?: boolean | undefined
        ) => void
    ) => {
        let cep_consulta: string = cep.replace("_", "");
        if (cep_consulta.length === 9) {
            dispatch(
                setModalCarregando({
                    ativo: true,
                })
            );
            axios
                .get(`https://viacep.com.br/ws/${cep}/json`)
                .then((resposta) => {
                    if (resposta.status === 200) {
                        if (resposta.data.erro) {
                            setModalAviso({
                                ativo: true,
                                descricao: "CEP não encontrado",
                            });
                        } else {
                            campos("rua", resposta.data.logradouro || "");
                            campos("bairro", resposta.data.bairro || "");
                            campos("cidade", resposta.data.localidade || "");
                            campos(
                                "estado",
                                estadoSigla(resposta.data.uf || "")
                            );
                        }
                    }
                    dispatch(
                        setModalCarregando({
                            ativo: false,
                        })
                    );
                })
                .catch((erro) => {
                    console.error(`Erro: ${erro}`);
                    dispatch(
                        setModalCarregando({
                            ativo: false,
                        })
                    );
                });
        }
    };

    return (
        <>
            <Container>
                <Formik
                    onSubmit={enviar}
                    validateOnMount
                    validationSchema={esquema}
                    initialValues={{
                        nome: "",
                        cpf: "",
                        email: "",
                        telefone: "",
                        data_nasc: "",
                        cep: "",
                        rua: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        cidade: "",
                        estado: "",
                        senha: "",
                        senha_confirmacao: "",
                    }}
                >
                    {({ setFieldValue, handleChange }) => (
                        <Form method="post" encType="multipart/form-data">
                            <TituloModulo titulo="Novo usuário"></TituloModulo>
                            <div className="formulario">
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="nome"
                                        tipo="text"
                                        titulo="Nome completo*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="cpf"
                                        tipo="text"
                                        titulo="CPF*"
                                        placeholder="000.000.000-00"
                                        on_change={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => handleChange(mascaraCPF(e))}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="email"
                                        tipo="email"
                                        titulo="E-mail*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="telefone"
                                        tipo="text"
                                        titulo="Telefone*"
                                        on_change={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => handleChange(mascaraTelefone(e))}
                                        placeholder="(00) 00000-0000"
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="data_nasc"
                                        tipo="date"
                                        titulo="Data de nascimento*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="cep"
                                        tipo="text"
                                        titulo="CEP"
                                        placeholder="99999-999"
                                        on_change={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => handleChange(mascaraCEP(e))}
                                        on_blur={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            buscarCep(
                                                e.target.value,
                                                setFieldValue
                                            )
                                        }
                                    ></CampoFormulario>
                                </div>
                                <CampoFormulario
                                    nome="rua"
                                    tipo="text"
                                    titulo="Endereço*"
                                    on_change={handleChange}
                                ></CampoFormulario>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="numero"
                                        tipo="text"
                                        titulo="Número*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="complemento"
                                        tipo="text"
                                        titulo="Complemento"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="bairro"
                                        tipo="text"
                                        titulo="Bairro*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="cidade"
                                        tipo="text"
                                        titulo="Cidade*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="estado"
                                        tipo="text"
                                        titulo="Estado*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="senha"
                                        tipo="password"
                                        titulo="Senha*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="senha_confirmacao"
                                        titulo="Confirmação de senha*"
                                        tipo="password"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                            </div>
                            {!desativarBotao ? (
                                <div className="bloco_botoes">
                                    <BotaoRedirecionar></BotaoRedirecionar>
                                    <BotaoEnviar titulo="Criar"></BotaoEnviar>
                                </div>
                            ) : null}
                        </Form>
                    )}
                </Formik>
            </Container>
            <ModalCarregando></ModalCarregando>
            <ModalAviso></ModalAviso>
        </>
    );
};

export default FormularioUsuario;
