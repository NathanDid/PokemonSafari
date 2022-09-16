import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "configureStore";

export const pokeballPrice = 100

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
    isPokeballThrown: boolean
}

const initialState: GameStateType = {
    score: 0,
    pokeballs: 2000,
    currentPokemon: null,
    loadingPokemon: false,
    ownedPokemons: [],
    isPokeballThrown: false
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        throwPokeball: (state, action) => ({
            ...state,
            pokeballs: state.pokeballs - 1,
            isPokeballThrown: true
        }),
        fetchPokemon: (state) => ({
            ...state,
            loadingPokemon: true
        }),
        setCurrentPokemon: (state, action) => ({
            ...state,
            currentPokemon: action.payload,
            loadingPokemon: false
        }),
        addToInventory: (state) => ({
            ...state,
            ownedPokemons: [...state.ownedPokemons, state.currentPokemon],
            isPokeballThrown: false
        }),
        increaseScore: (state) => ({
            ...state,
            score: state.score + state.currentPokemon.score
        }),
        buyPokeball: (state) => ({
            ...state,
            pokeballs: state.pokeballs + 1,
            score: state.score - pokeballPrice
        }),
        throwPokeballFailed: (state) => ({
            ...state,
            isPokeballThrown: false
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

export const {
    throwPokeball,
    fetchPokemon,
    setCurrentPokemon,
    addToInventory,
    increaseScore,
    buyPokeball,
    throwPokeballFailed
} = gameSlice.actions

export default gameSlice.reducer