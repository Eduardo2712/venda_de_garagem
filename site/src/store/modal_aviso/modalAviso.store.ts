import { createSlice } from "@reduxjs/toolkit";

type ReduxModalAviso = {
    ativo: boolean;
    descricao: string;
};

const modalAviso = createSlice({
    name: "modalAviso",
    initialState: {
        ativo: false,
        descricao: "",
    },
    reducers: {
        setModalAviso(state: ReduxModalAviso, action: any) {
            state.ativo = action.payload.ativo;
            state.descricao = action.payload.descricao;
        },
    },
});

export const { setModalAviso } = modalAviso.actions;
export default modalAviso.reducer;
