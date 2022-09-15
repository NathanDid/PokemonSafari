import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "configureStore";

const THROW_POKEBALL = 'poke::THROW_POKEBALL'
const ENCOUNTER = 'poke::ENCOUNTER'

export type PokemonType = {
    name: string;
    image: string;
    score: number;
    rate: number;
}

export type GameStateType = {
    score: number;
    pokeballs: number;
    currentPokemon?: PokemonType;
    loadingPokemon: boolean,
    ownedPokemons: PokemonType[]
}

const initialState: GameStateType = {
    score: 0,
    pokeballs: 20,
    currentPokemon: null,
    loadingPokemon: false,
    ownedPokemons: []
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        throwPokeball: (state) => ({
            ...state,
            pokeballs: state.pokeballs - 1
        }),
        fetchPokemon: (state) => ({
            ...state,
            loadingPokemon: true
        }),
        setCurrentPokemon: (state, action) => ({
            ...state,
            currentPokemon: action.payload,
            loadingPokemon: false
        })
    }
})

export const loadingPokemonSelector = (state: RootState) => state.game.currentPokemon

export const {
    throwPokeball,
    fetchPokemon,
    setCurrentPokemon
} = gameSlice.actions

export default gameSlice.reducer