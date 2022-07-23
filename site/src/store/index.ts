import { configureStore } from "@reduxjs/toolkit";
import paginacaoAnunciosReducer from "./paginacao_anuncios/paginacaoAnuncios.store";
import modalAvisoReducer from "./modal_aviso/modalAviso.store";
import modalCarregandoReducer from "./modal_carregando/modalCarregando.store";

const store = configureStore({
    reducer: {
        paginacaoAnuncios: paginacaoAnunciosReducer,
        modalAviso: modalAvisoReducer,
        modalCarregando: modalCarregandoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
