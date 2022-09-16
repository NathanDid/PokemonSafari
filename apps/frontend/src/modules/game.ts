import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "configureStore";

export const pokeballPrice = 500

export type PokemonType = {
    name: string;
    image: string;
    score: number;
    rate: number;
    sprite: string;
}

export type GameStateType = {
    score: number;
    pokeballs: number;
    currentPokemon?: PokemonType;
    loadingPokemon: boolean,
    ownedPokemons: PokemonType[],
    isPokeballThrown: boolean,
    shakePokemon: boolean
}

const initialState: GameStateType = {
    score: 0,
    pokeballs: 20,
    currentPokemon: null,
    loadingPokemon: false,
    ownedPokemons: [],
    isPokeballThrown: false,
    shakePokemon: false
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        throwPokeball: (state, action) => ({
            ...state,
            pokeballs: state.pokeballs - 1,
            isPokeballThrown: true,
            shakePokemon: false
        }),
        fetchPokemon: (state) => ({
            ...state,
            loadingPokemon: true,
            shakePokemon: false
        }),
        setCurrentPokemon: (state, action) => ({
            ...state,
            currentPokemon: action.payload,
            loadingPokemon: false
        }),
        buyPokeball: (state) => ({
            ...state,
            pokeballs: state.pokeballs + 1,
            score: state.score - pokeballPrice
        }),
        throwPokeballSuccess: (state) => ({
            ...state,
            score: state.score + state.currentPokemon.score,
            ownedPokemons: [...state.ownedPokemons, state.currentPokemon],
            isPokeballThrown: false,
            loadingPokemon: false,
            currentPokemon: null,
        }),
        throwPokeballFailed: (state) => ({
            ...state,
            isPokeballThrown: false,
            shakePokemon: true
        })
    }
})

export type ThrowPokeballPayloadType = {
    payload: {
      score: number;
      rate: number;
    }
  }

export const loadingPokemonSelector = (state: RootState) => state.game.currentPokemon
export const isLoadingPokemon = (state: RootState) => state.game.loadingPokemon
export const scoreSelector = (state: RootState) => state.game.score
export const rateSelector = (state: RootState) => state.game.currentPokemon ? state.game.currentPokemon.rate : 0
export const ownedPokemonsSelector = (state: RootState) => state.game.ownedPokemons
export const isPokeballThrownSelector = (state: RootState) => state.game.isPokeballThrown
export const shakePokemonSelector = (state: RootState) => state.game.shakePokemon

export const {
    throwPokeball,
    fetchPokemon,
    setCurrentPokemon,
    buyPokeball,
    throwPokeballFailed,
    throwPokeballSuccess
} = gameSlice.actions

export default gameSlice.reducer