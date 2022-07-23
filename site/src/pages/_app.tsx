import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AutenticacaoProvider } from "../context/autenticacao";
import { useEffect, useState } from "react";
import Carregando from "../components/carregando";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";
import { Global } from "../styles/global";
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import MenuCelular from "../components/menu_celular";
config.autoAddCss = false;

const theme: DefaultTheme = {};

function MyApp({ Component, pageProps }: AppProps) {
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        setCarregando(true);
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="titla, meta, nextjs" />
                <meta name="author" content="Syamlal CM" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Venda de garagem</title>
            </Head>
            {carregando ? (
                <ThemeProvider theme={theme}>
                    <AutenticacaoProvider>
                        <Provider store={store}>
                            <Global></Global>
                            <Cabecalho></Cabecalho>
                            <Component {...pageProps} />
                            <MenuCelular></MenuCelular>
                            <Rodape></Rodape>
                        </Provider>
                    </AutenticacaoProvider>
                </ThemeProvider>
            ) : (
                <Carregando></Carregando>
            )}
        </>
    );
}

export default MyApp;
