import { useEffect, useState } from "react";
import TituloModulo from "../titulo_modulo";
import Container from "./estilo";

type Props = {
    setFieldValue: any;
};

const BlocoSubirImagem = (props: Props) => {
    const [imagens, setImagens] = useState<File[]>([]);
    const [imagensURL, setImagensURL] = useState<string[]>([]);
    const [imagemPrincipal, setImagemPrincipal] = useState<number | null>(null);

    useEffect(() => {
        const imagensTela: Array<any> = [];
        imagens.forEach((imagem: File) => {
            imagensTela.push(URL.createObjectURL(imagem));
        });
        setImagensURL(imagensTela);
    }, [imagens]);

    const subirImagens = (e: any, setFieldValue: any) => {
        if (imagens.length > 0) {
            const novasImagens: Array<File> = imagens;
            let i = 0;
            while (i < e.target.files.length) {
                novasImagens.push(e.target.files[i]);
                i++;
            }
            setImagens([...novasImagens]);
            setFieldValue("imagens", novasImagens);
        } else {
            setImagens([...e.target.files]);
            setFieldValue("imagens", e.target.files);
        }
    };

    const excluirImagem = (e: any, setFieldValue: any) => {
        imagens.splice(
            Number(e.currentTarget.closest(".imagem_anuncio").dataset.id),
            1
        );
        imagensURL.splice(
            Number(e.currentTarget.closest(".imagem_anuncio").dataset.id),
            1
        );
        setImagens([...imagens]);
        setImagensURL([...imagensURL]);
        setFieldValue("imagens", imagens);
    };

    const caixaSelecao = (
        e: React.MouseEvent<HTMLInputElement, MouseEvent> | any
    ) => {
        if (e.currentTarget.checked) {
            Array.from(
                document.getElementsByClassName("caixa_selecao")
            ).forEach((elemento: any) => {
                if (e.currentTarget !== elemento) {
                    elemento.checked = false;
                }
            });
            setImagemPrincipal(
                e.currentTarget.closest(".imagem_anuncio").dataset.id
            );
        }
    };

    return (
        <Container>
            <TituloModulo titulo="Imagens do anúncio"></TituloModulo>
            <div className="bloco_subir_imagem">
                <label className="enviar_arquivo" htmlFor="imagens">
                    Importar imagens
                </label>
                <input
                    className="botao_subir_imagem"
                    id="imagens"
                    type="file"
                    name="imagens"
                    accept="image/png, image/jpeg"
                    multiple
                    onChange={(e) => subirImagens(e, props.setFieldValue)}
                ></input>
                <p className="texto_tipo">
                    {imagens.length === 0 ? "Sem imagens" : null}
                </p>
                <div className="bloco_imagens">
                    {imagensURL.map((data, index) => {
                        return (
                            <div
                                key={index}
                                data-id={index}
                                className="imagem_anuncio"
                            >
                                <img className="imagem" src={data} />
                                <button
                                    className="botao_fechar"
                                    type="button"
                                    onClick={(e) =>
                                        excluirImagem(e, props.setFieldValue)
                                    }
                                >
                                    X
                                </button>
                                <input
                                    className="caixa_selecao"
                                    type="checkbox"
                                    onClick={(
                                        e: React.MouseEvent<
                                            HTMLInputElement,
                                            MouseEvent
                                        >
                                    ) => caixaSelecao(e)}
                                ></input>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default BlocoSubirImagem;
