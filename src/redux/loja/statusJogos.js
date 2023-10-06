import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { buscarDetalhesDoJogoAsync, buscarJogosAsync } from "../utils/jogosUtils";

const initialState = {
    games: [],
    gamesStatus: STATUS.PARADO,
    gamesSingle: {},
    gamesSingleStatus: STATUS.PARADO,
}

const statusJogosGlobal = createSlice({
    name: "game",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(buscarJogosAsync.pending, (state) => {
            state.gamesStatus = STATUS.CARREGANDO
        })

        builder.addCase(buscarJogosAsync.fulfilled, (state, action) => {
            state.games = action.payload;
            state.gamesStatus = STATUS.SUCESSO;
        })

        builder.addCase(buscarJogosAsync.rejected, (state) => {
            state.gamesStatus = STATUS.FALHOU
        })

        builder.addCase(buscarDetalhesDoJogoAsync.pending, (state) => {
            state.gamesSingleStatus = STATUS.CARREGANDO
        })

        builder.addCase(buscarDetalhesDoJogoAsync.fulfilled, (state, action) => {
            state.gamesSingle = action.payload;
            state.gamesSingleStatus = STATUS.SUCESSO;
        })

        builder.addCase(buscarDetalhesDoJogoAsync.rejected, (state) => {
            state.gamesSingleStatus = STATUS.FALHOU
        })
    },
    reducers: {}
});

export const selecionarTodosJogos = (state) => state.game.games.results;
export const selecionarTodosStatusJogos = (state) => state.game.gamesStatus;
export const selecionarJogosProximaPagina = (state) => state.game.games.next;
export const selecionarJogosPaginaAntiga = (state) => state.game.games.previous;
export const selecionarJogo = (state) => state.game.gamesSingle;
export const selecionarDescricaoJogo = (state) => state.game.gamesSingleStatus;


export default statusJogosGlobal.reducer;