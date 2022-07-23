import {
    faArrowRightFromBracket,
    faBell,
    faBullhorn,
    faHandshake,
    faSquareCaretDown,
    faUser,
    faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { AutenticacaoContext } from "../../context/autenticacao";
import { ContextLogin } from "../../types";
import Container from "./estilo";

const Cabecalho = () => {
    const { autenticado, usuario, logout } = useContext(
        AutenticacaoContext
    ) as ContextLogin;

    return (
        <Container>
            <header className="cabecalho">
                <div className="bloco_logo">
                    <a className="link_logo" href="/">
                        Venda de garagem
                    </a>
                </div>
                <div className="bloco_links">
                    <div className="bloco_link" title="Anunciar">
                        <FontAwesomeIcon className="icone" icon={faBullhorn} />
                        <Link href={autenticado ? "/anunciar" : "/logar"}>
                            Anúnciar
                        </Link>
                    </div>
                    {autenticado ? (
                        <>
                            <div className="bloco_link" title="Meus anúncios">
                                <FontAwesomeIcon
                                    className="icone"
                                    icon={faHandshake}
                                />
                                <Link href={"/meus_anuncios"}>
                                    Meus anúncios
                                </Link>
                            </div>
                            <div className="bloco_link" title="Mensagens">
                                <FontAwesomeIcon
                                    className="icone"
                                    icon={faBell}
                                />
                                <Link href={"/mensagens"}>Mensagens</Link>
                            </div>
                            <div className="menu">
                                <div className="bloco_link">
                                    <FontAwesomeIcon
                                        className="icone"
                                        icon={faSquareCaretDown}
                                    />
                                    <p>
                                        {`Olá, ${
                                            usuario?.nome.split(" ")[0] ?? ""
                                        }`}
                                    </p>
                                </div>
                                <nav className="menu_suspenso">
                                    <div className="link_menu_suspenso">
                                        <FontAwesomeIcon
                                            className="icone_menu_suspenso"
                                            icon={faBullhorn}
                                        />
                                        <Link href={"/anunciar"}>Anunciar</Link>
                                    </div>
                                    <div className="link_menu_suspenso">
                                        <FontAwesomeIcon
                                            className="icone_menu_suspenso"
                                            icon={faHandshake}
                                        />
                                        <Link href={"/meus_anuncios"}>
                                            Meus anúncios
                                        </Link>
                                    </div>
                                    <div className="link_menu_suspenso">
                                        <FontAwesomeIcon
                                            className="icone_menu_suspenso"
                                            icon={faBell}
                                        />
                                        <Link href={"/mensagens"}>
                                            Mensagens
                                        </Link>
                                    </div>
                                    <div className="link_menu_suspenso">
                                        <FontAwesomeIcon
                                            className="icone_menu_suspenso"
                                            icon={faUserPen}
                                        />
                                        <Link href={"/editar_usuario"}>
                                            Editar
                                        </Link>
                                    </div>
                                    <div
                                        className="link_menu_suspenso"
                                        onClick={() => logout()}
                                    >
                                        <FontAwesomeIcon
                                            className="icone_menu_suspenso"
                                            icon={faArrowRightFromBracket}
                                        />
                                        <p>Sair</p>
                                    </div>
                                </nav>
                            </div>
                        </>
                    ) : (
                        <div className="bloco_link">
                            <FontAwesomeIcon className="icone" icon={faUser} />
                            <Link href={"/logar"}>Entrar</Link>
                        </div>
                    )}
                </div>
            </header>
        </Container>
    );
};

export default Cabecalho;
