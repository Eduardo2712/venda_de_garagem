import Container from "./estilo";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalAviso from "../../../components/modal_aviso";
import { AutenticacaoContext } from "../../../context/autenticacao";
import { ContextLogin, TipoAnuncio } from "../../../types";
import BotaoRedirecionar from "../../../components/botao_redirecionar";
import BotaoEnviar from "../../../components/botao_enviar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import TituloModulo from "../../../components/titulo_modulo";
import CampoFormulario from "../../../components/campo_formulario";
import { mascaraCEP, mascaraDinheiro } from "../../../utils/mascaras";
import { setModalCarregando } from "../../../store/modal_carregando/modalCarregando.store";
import axios from "axios";
import { setModalAviso } from "../../../store/modal_aviso/modalAviso.store";
import ModalCarregando from "../../../components/modal_carregando";
import { estadoSigla } from "../../../utils/endereco";
import BlocoSubirImagem from "../../../components/bloco_subir_imagem";

const FormularioAnuncio = () => {
    const router = useRouter();
    const modalAviso = useSelector((state: RootState) => state.modalAviso);
    const dispatch = useDispatch();
    const { login } = useContext(AutenticacaoContext) as ContextLogin;
    const [tipoAnuncio, setTipoAnuncio] = useState<TipoAnuncio[]>([]);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_URL_BASE}/api/tipo_anuncio`)
            .then((resposta) => {
                if (resposta.data.sucesso) {
                    setTipoAnuncio(resposta.data.tipo_anuncios);
                }
            })
            .catch((err) => {
                console.error(`Erro: ${err}`);
            });
    }, []);

    const esquema = Yup.object().shape({
        titulo: Yup.string()
            .email("Preencha com um e-mail válido")
            .required("Preencha esse campo!"),
        valor: Yup.string().required("Preencha esse campo!"),
        descricao: Yup.string().required("Preencha esse campo!"),
        cep: Yup.string(),
        rua: Yup.string().required("Preencha esse campo!"),
        numero: Yup.number().required("Preencha esse campo!"),
        complemento: Yup.string(),
        bairro: Yup.string().required("Preencha esse campo!"),
        cidade: Yup.string().required("Preencha esse campo!"),
        estado: Yup.string().required("Preencha esse campo!"),
        tipo_anuncio: Yup.string().required("Preencha esse campo!"),
    });

    const selecaoTipoAnuncio = (
        tipo_anuncio: number,
        setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean | undefined
        ) => void
    ) => {
        setFieldValue("tipo_anuncio", tipo_anuncio);
        if (tipo_anuncio === 4) {
            setFieldValue("valor", "00,00");
        }
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

    const verificaImagemPrincipal = () => {
        let imagemPrincipal = false;
        if (document.getElementsByClassName("caixa_selecao").length > 0) {
            Array.from(
                document.getElementsByClassName("caixa_selecao")
            ).forEach((elemento: any) => {
                if (elemento.checked) {
                    imagemPrincipal = true;
                }
            });
        } else {
            imagemPrincipal = true;
        }
        return imagemPrincipal;
    };

    const enviar = async (values: any, { setSubmitting, resetForm }: any) => {
        const imagemPrincipal = verificaImagemPrincipal();
        if (!imagemPrincipal) {
            dispatch(
                setModalAviso({
                    ativo: true,
                    descricao: "Selecione a imagem principal do anúncio",
                })
            );
            return;
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
                        titulo: "",
                        valor: "",
                        descricao: "",
                        cep: "",
                        rua: "",
                        numero: "",
                        complemento: "",
                        bairro: "",
                        cidade: "",
                        estado: "",
                        tipo_anuncio: "",
                    }}
                >
                    {({ handleChange, setFieldValue, values }) => (
                        <Form method="post">
                            <TituloModulo titulo="Novo anúncio"></TituloModulo>
                            <div className="formulario">
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="titulo"
                                        tipo="text"
                                        titulo="Título*"
                                        on_change={handleChange}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="tipo_anuncio"
                                        tipo="text"
                                        titulo="Tipo do anúncio*"
                                        on_change={(e) =>
                                            selecaoTipoAnuncio(
                                                Number(e.currentTarget.value),
                                                setFieldValue
                                            )
                                        }
                                        tipo_campo="select"
                                        opcoes={tipoAnuncio}
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="descricao"
                                        tipo="text"
                                        titulo="Descrição*"
                                        on_change={handleChange}
                                        tipo_campo="textarea"
                                    ></CampoFormulario>
                                </div>
                                <div className="bloco_formulario">
                                    <CampoFormulario
                                        nome="valor"
                                        tipo="text"
                                        titulo="Valor (R$)*"
                                        on_change={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => handleChange(mascaraDinheiro(e))}
                                        desativar={
                                            Number(values.tipo_anuncio) === 4
                                                ? true
                                                : false
                                        }
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
                            </div>
                            <BlocoSubirImagem
                                setFieldValue={setFieldValue}
                            ></BlocoSubirImagem>
                            <div className="bloco_botoes">
                                <BotaoRedirecionar></BotaoRedirecionar>
                                <BotaoEnviar titulo="Criar"></BotaoEnviar>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
            <ModalCarregando></ModalCarregando>
            <ModalAviso></ModalAviso>
        </>
    );
};

export default FormularioAnuncio;
