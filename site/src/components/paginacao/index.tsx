import {
    faCircleArrowLeft,
    faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPaginacaoAnuncios } from "../../store/paginacao_anuncios/paginacaoAnuncios.store";
import Container from "./estilo";

const Paginacao = () => {
    const router = useRouter();
    const quantidade: number = 10;
    const dispatch = useDispatch();
    const paginacaoAnuncios = useSelector(
        (state: RootState) => state.paginacaoAnuncios
    );

    const mudarPagina = (pagina: number) => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_URL_BASE}/api/anuncios/paginacao?quantidade=${quantidade}&pagina=${pagina}&busca=${paginacaoAnuncios.busca}`
            )
            .then((resposta) => {
                if (resposta.data.sucesso) {
                    dispatch(
                        setPaginacaoAnuncios({
                            ...paginacaoAnuncios,
                            pagina_atual: pagina,
                            anuncios: resposta.data.anuncios,
                            max_paginas: Math.ceil(
                                Number(resposta.data.totalAnuncios) / quantidade
                            ),
                            total_anuncios: resposta.data.totalAnuncios,
                        })
                    );
                    router.push(
                        `pesquisa/?busca=${paginacaoAnuncios.busca}&pagina=${pagina}`
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
    };

    return (
        <Container>
            <div className="bloco_paginacao">
                <div className="bloco_numero">
                    {Number(paginacaoAnuncios.pagina_atual) > 1 && (
                        <button
                            className="botao_paginacao"
                            onClick={() =>
                                mudarPagina(
                                    Number(paginacaoAnuncios.pagina_atual) - 1
                                )
                            }
                        >
                            <FontAwesomeIcon
                                className="icone_seta"
                                icon={faCircleArrowLeft}
                            ></FontAwesomeIcon>
                        </button>
                    )}
                </div>
                <div className="bloco_numero">
                    <p className="numero_pagina_atual">
                        {Number(paginacaoAnuncios.pagina_atual)}
                    </p>
                </div>
                <div className="bloco_numero">
                    {Number(paginacaoAnuncios.pagina_atual) <
                        paginacaoAnuncios.max_paginas && (
                        <button
                            className="botao_paginacao"
                            onClick={() =>
                                mudarPagina(
                                    Number(paginacaoAnuncios.pagina_atual) + 1
                                )
                            }
                        >
                            <FontAwesomeIcon
                                className="icone_seta"
                                icon={faCircleArrowRight}
                            ></FontAwesomeIcon>
                        </button>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Paginacao;
