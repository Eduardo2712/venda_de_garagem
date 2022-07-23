import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "./estilo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import axios from "axios";
import { setPaginacaoAnuncios } from "../../store/paginacao_anuncios/paginacaoAnuncios.store";
import ModalAviso from "../modal_aviso";
import { setModalAviso } from "../../store/modal_aviso/modalAviso.store";

const Buscar = () => {
    const router = useRouter();
    const parametros = new URLSearchParams(window.location.search);
    const [buscar, setBuscar] = useState<string>(parametros.get("busca") ?? "");
    const quantidade: number = 10;
    const paginacaoAnuncios = useSelector(
        (state: RootState) => state.paginacaoAnuncios
    );
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_URL_BASE}/api/anuncios/paginacao?quantidade=${quantidade}&pagina=${paginacaoAnuncios.pagina_atual}&busca=${buscar}`
            )
            .then((resposta) => {
                if (resposta.data.sucesso) {
                    dispatch(
                        setPaginacaoAnuncios({
                            pagina_atual: parametros.get("pagina") ?? 1,
                            busca: parametros.get("busca") ?? "",
                            anuncios: resposta.data.anuncios,
                            max_paginas: Math.ceil(
                                Number(resposta.data.totalAnuncios) / quantidade
                            ),
                            total_anuncios: resposta.data.totalAnuncios,
                        })
                    );
                }
            })
            .catch((erro) => {
                console.error(`Erro ${erro}`);
                dispatch(
                    setPaginacaoAnuncios({
                        anuncios: [],
                        pagina_atual: 1,
                        max_paginas: 1,
                        busca: "",
                        total_anuncios: 0,
                    })
                );
            });
    }, []);

    const buscarPalavra = () => {
        if (buscar.length === 0) {
            dispatch(
                setModalAviso({
                    ativo: true,
                    descricao: "Digite o que deseja buscar",
                })
            );
        } else {
            axios
                .get(
                    `${
                        process.env.NEXT_PUBLIC_URL_BASE
                    }/api/anuncios/paginacao?quantidade=${quantidade}&pagina=${1}&busca=${buscar}`
                )
                .then((resposta) => {
                    if (resposta.data.sucesso) {
                        dispatch(
                            setPaginacaoAnuncios({
                                pagina_atual: 1,
                                busca: buscar,
                                anuncios: resposta.data.anuncios,
                                max_paginas: Math.ceil(
                                    Number(resposta.data.totalAnuncios) /
                                        quantidade
                                ),
                                total_anuncios: resposta.data.totalAnuncios,
                            })
                        );
                        router.push(`pesquisa/?busca=${buscar}&pagina=${1}`);
                    }
                })
                .catch((erro) => {
                    console.error(`Erro ${erro}`);
                    dispatch(
                        setPaginacaoAnuncios({
                            anuncios: [],
                            pagina_atual: 1,
                            max_paginas: 1,
                            busca: "",
                            total_anuncios: 0,
                        })
                    );
                });
        }
    };

    return (
        <>
            <Container>
                <div className="bloco_buscar">
                    <input
                        type="text"
                        className="campo_buscar"
                        value={buscar}
                        onChange={(e) => setBuscar(e.currentTarget.value)}
                        placeholder="Digite o que deseja buscar"
                    />
                    <button
                        className="botao_buscar"
                        onClick={() => buscarPalavra()}
                        type="button"
                    >
                        Buscar
                    </button>
                </div>
            </Container>
            <ModalAviso></ModalAviso>
        </>
    );
};

export default Buscar;
