import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sideBarSlice";
import statusJogos from "./statusJogos";

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
        game: statusJogos
    }
})