import { createSlice } from "@reduxjs/toolkit";
import { Anuncio } from "../../types";

type ReduxPaginacaoAnuncios = {
    pagina_atual: number;
    max_paginas: number;
    anuncios: Anuncio[];
    busca: string;
    total_anuncios: number;
};

const paginacaoAnuncios = createSlice({
    name: "paginacaoAnuncios",
    initialState: {
        anuncios: [] as Anuncio[],
        pagina_atual: 1,
        max_paginas: 1,
        busca: "",
        total_anuncios: 0,
    },
    reducers: {
        setPaginacaoAnuncios(state: ReduxPaginacaoAnuncios, action: any) {
            state.anuncios = action.payload.anuncios;
            state.pagina_atual = action.payload.pagina_atual;
            state.max_paginas = action.payload.max_paginas;
            state.busca = action.payload.busca;
            state.total_anuncios = action.payload.total_anuncios;
        },
    },
});

export const { setPaginacaoAnuncios } = paginacaoAnuncios.actions;
export default paginacaoAnuncios.reducer;
