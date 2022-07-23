import { createSlice } from "@reduxjs/toolkit";

type ReduxModalCarregando = {
    ativo: boolean;
};

const modalCarregando = createSlice({
    name: "modalCarregando",
    initialState: {
        ativo: false,
        descricao: "",
    },
    reducers: {
        setModalCarregando(state: ReduxModalCarregando, action: any) {
            state.ativo = action.payload.ativo;
        },
    },
});

export const { setModalCarregando } = modalCarregando.actions;
export default modalCarregando.reducer;
