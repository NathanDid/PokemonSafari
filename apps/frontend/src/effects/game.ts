import { PokemonType } from 'modules/game'
import * as gameSlice from '../modules/game'
import {
  all,
  call,
  put,
  takeLeading,
} from 'redux-saga/effects'
import { get } from '../apiClient'

function* fetchPokemon() {
  try {
    const pokemon: PokemonType = yield call(get, `/pokemon`)

    yield all([
      put(gameSlice.setCurrentPokemon(pokemon)),
    ])
  } catch (error) {
    console.error(error)
  }
}

export default function* game() {
  yield takeLeading(gameSlice.fetchPokemon, fetchPokemon)
}
