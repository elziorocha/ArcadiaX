import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";
import { API_KEY } from "../../api/chave-api"

export const buscarJogosAsync = createAsyncThunk('games/fetch', async(pagina = 1) => {
    const { data } = await axios.get(`${apiURL.jogosURL}?key=${API_KEY}&page=${pagina}`);
    return data;
});

export const buscarDetalhesDoJogoAsync = createAsyncThunk('game/details/fetch', async(id) => {
    const { data } = await axios.get(`${apiURL.jogosURL}/${id}?key=${API_KEY}`);
    return data;
})