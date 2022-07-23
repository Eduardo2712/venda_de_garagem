import {
    faBell,
    faBullhorn,
    faHandshake,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useContext } from "react";
import { AutenticacaoContext } from "../../context/autenticacao";
import { ContextLogin } from "../../types";
import Container from "./estilo";

const MenuCelular = () => {
    const { autenticado } = useContext(AutenticacaoContext) as ContextLogin;

    return (
        <Container>
            <footer className="bloco_menu_celular">
                <div className="bloco_link" title="Anunciar">
                    <a href={"/anunciar"}>
                        <FontAwesomeIcon className="icone" icon={faBullhorn} />
                    </a>
                </div>
                {autenticado ? (
                    <>
                        <div className="bloco_link" title="Meus anúncios">
                            <a href={"/meus_anuncios"}>
                                <FontAwesomeIcon
                                    className="icone"
                                    icon={faHandshake}
                                />
                            </a>
                        </div>
                        <div className="bloco_link" title="Mensagens">
                            <a href={"/mensagens"}>
                                <FontAwesomeIcon
                                    className="icone"
                                    icon={faBell}
                                />
                            </a>
                        </div>
                    </>
                ) : null}
                <div className="bloco_link">
                    <a href={autenticado ? "/logar" : "/editar_usuario"}>
                        <FontAwesomeIcon className="icone" icon={faUser} />
                    </a>
                </div>
            </footer>
        </Container>
    );
};

export default MenuCelular;
